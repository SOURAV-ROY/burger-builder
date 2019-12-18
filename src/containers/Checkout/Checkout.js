import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {

        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1,
        }
    };

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();

    };
    onCheckoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');

    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}
                />
            </div>
        );
    }

}

export default Checkout;
