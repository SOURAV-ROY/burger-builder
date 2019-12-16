import React, {Component} from 'react';
import Aux from "../../hoc/ReactAux/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENT_PRICE = {
    salad: 25,
    cheese: 40,
    meat: 90,
    bacon: 30,
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={};
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false,
        loading: false
    };

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

    purchaseContinueHandler = () => {
        // alert('You Continue!!');
        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Sourav Roy",
                address: {
                    street: 'Dhaka',
                    zipCode: '1229',
                    country: 'Bangladesh'
                },
                email: 'sourav@admin.com'
            },
            deliveryMethod: 'Fastest'
        };

        // axios.post('/orders.json', order)
        //     // .then(response => console.log(response));
        //     .then(response => {
        //         this.setState({loading : false, purchasing: false});
        //     })
        //     // .catch(error => console.log(error));
        //     .catch(error => {
        //         this.setState({loading: false, purchasing: false});
        //     });
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
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //{salad: true, meat: false, ..............}

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
        />;

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

                <Burger ingredients={this.state.ingredients}/>

                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />

            </Aux>
        );
    }
}

export default BurgerBuilder;
