import React, {Component} from 'react';
import Aux from "../../../hoc/ReactAux/ReactAux";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This should be a functional component, doesn't have to be class
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // if (nextProps.show != this.props.show){}
    //     return nextProps.show != this.props.show;
    // }

    render() {

        let ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>

                <p><strong>Total Price : {this.props.price.toFixed(2)} &#2547; </strong></p>
                <p>Continue To CheckOut? </p>
                <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );

    }
}

export default OrderSummary;


// const orderSummary = (props) => {
//     let ingredientSummary = Object.keys(props.ingredients)
//         .map(igKey => {
//             return (
//                 <li key={igKey}>
//                     <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
//                 </li>
//             );
//         });
//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious Burger with the following ingredients:</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//
//             <p><strong>Total Price : {props.price.toFixed(2)} &#2547; </strong></p>
//             <p>Continue To CheckOut? </p>
//             <Button btnType={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
//             <Button btnType={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>
//         </Aux>
//     )
// };
//
// export default orderSummary;
