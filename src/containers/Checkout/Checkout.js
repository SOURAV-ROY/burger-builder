import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
// import * as actions from '../../store/actions/index';

class Checkout extends Component {
    state = {

        ingredients: null,
        price: 0

        // ingredients: {
        //     salad: 1,
        //     bacon: 1,
        //     cheese: 1,
        //     meat: 1,
        // }
    };

    // UNSAFE_componentWillMount() {
    //     this.props.onInitPurchase();

        // UNSAFE_componentWillMount() {
        //     const query = new URLSearchParams(this.props.location.search);
        //     const ingredients = {};
        //     let price = 0;
        //     for (let param of query.entries()) {
        //         //['salad', '1']
        //         if (param[0] === 'price') {
        //             price = param[1];
        //         } else {
        //             ingredients[param[0]] = +param[1];
        //         }
        //
        //     }
        //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        let summary = <Redirect to="/"/>;
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;

            summary = (
                <div>
                    {purchasedRedirect}

                    <CheckoutSummary
                        // ingredients={this.state.ingredients}
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                    />

                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    />
                </div>
            );
        }
        return summary;

        // return (
        //     <div>
        //         {summary}
        //
        //         {/*<CheckoutSummary*/}
        //         {/*    // ingredients={this.state.ingredients}*/}
        //         {/*    ingredients={this.props.ings}*/}
        //         {/*    checkoutCancelled={this.checkoutCancelledHandler}*/}
        //         {/*    checkoutContinued={this.checkoutContinuedHandler}*/}
        //         {/*/>*/}
        //
        //         {/*<Route*/}
        //         {/*    path={this.props.match.path + '/contact-data'}*/}
        //         {/*    component={ContactData}*/}
        //
        //         {/*    // render={(props) => (*/}
        //         {/*    //     <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}*/}
        //         {/*/>*/}
        //     </div>
        // );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actions.purchaseInit())
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default connect(mapStateToProps)(Checkout);
