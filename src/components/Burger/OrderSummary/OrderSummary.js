import React from 'react';

import Aux from "../../../hoc/ReactAux";

const orderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p>Continue To CheckOut? </p>
        </Aux>
    )
};

export default orderSummary;
