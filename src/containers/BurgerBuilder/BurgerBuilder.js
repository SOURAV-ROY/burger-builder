import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from "../../hoc/ReactAux/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICE = {
    salad: 25.33,
    cheese: 40.44,
    meat: 80.56,
    bacon: 30.66,
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={};
    // }
    state = {
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },

        // ingredients: null,
        totalPrice: 20,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
        // axios.get('https://burger-banai.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true});
        //     });
    }

    updatePurchaseState(ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

//  CONTINUE BUTTON CLICK OPTION *********************************************
    purchaseContinueHandler = () => {
        // alert('You Continue!!');
//         this.setState({loading: true});
//
//         const order = {
//             ingredients: this.state.ingredients,
//             price: this.state.totalPrice,
//             customer: {
//                 name: "Sourav Roy",
//                 address: {
//                     street: 'Dhaka',
//                     zipCode: '1229',
//                     country: 'Bangladesh'
//                 },
//                 email: 'sourav@admin.com'
//             },
//             deliveryMethod: 'Fastest'
//         };
//
// //      POST SUBMIT DATA IN FIREBASE ***********************************************
//         axios.post('/orders.json', order)
//             // .then(response => console.log(response));
//             .then(response => {
//                 this.setState({loading: false, purchasing: false});
//             })
//             // .catch(error => console.log(error));
//             .catch(error => {
//                 this.setState({loading: false, purchasing: false});
//             });
//         this.props.history.push('checkout');

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }

        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };

        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    };

    render() {

        const disabledInfo = {
            // ...this.state.ingredients
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad: true, meat: false, ..............}

        let orderSummary = null;

        // orderSummary = <OrderSummary
        //     ingredients={this.state.ingredients}
        //     price={this.state.totalPrice}
        //     purchaseCancelled={this.purchaseCancelHandler}
        //     purchaseContinued={this.purchaseContinueHandler}
        // />;

        let burger = this.state.error ? <p>Ingredients Can't Be Loaded</p> : <Spinner/>;

        // if (this.state.ingredients) {
        if (this.props.ings) {
            burger = (
                <Aux>
                    {/*<Burger ingredients={this.state.ingredients}/>*/}
                    <Burger ingredients={this.props.ings}/>

                    <BuildControls

                        // ingredientAdded={this.addIngredientHandler}
                        ingredientAdded={this.props.onIngredientAdded}

                        // ingredientRemoved={this.removeIngredientHandler}
                        ingredientRemoved={this.props.onIngredientRemoved}

                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Aux>

            );
            orderSummary = <OrderSummary
                // ingredients={this.state.ingredients}
                ingredients={this.props.ings}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }


        return (
            <Aux>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}

                    {/*<OrderSummary*/}
                    {/*    ingredients={this.state.ingredients}*/}
                    {/*    price={this.state.totalPrice}*/}
                    {/*    purchaseCancelled={this.purchaseCancelHandler}*/}
                    {/*    purchaseContinued={this.purchaseContinueHandler}*/}
                    {/*/>*/}

                </Modal>
                {burger}

                {/*<Burger ingredients={this.state.ingredients}/>*/}

                {/*<BuildControls*/}
                {/*    ingredientAdded={this.addIngredientHandler}*/}
                {/*    ingredientRemoved={this.removeIngredientHandler}*/}
                {/*    disabled={disabledInfo}*/}
                {/*    purchasable={this.state.purchasable}*/}
                {/*    ordered={this.purchaseHandler}*/}
                {/*    price={this.state.totalPrice}*/}
                {/*/>*/}

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }

};
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }

};

// export default BurgerBuilder;
// export default withErrorHandler(BurgerBuilder, axios);

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
