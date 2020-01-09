import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>

        <p>Current Price: <strong> {props.price.toFixed(2)} </strong> BDT</p>

        {controls.map(ctrl => (
            <BuildControl
                label={ctrl.label}
                key={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}

                // addIngredient={() => props.addIngredients(ctrl.type)}
                // removeIngredient={() => props.removeIngredient(ctrl.type)}
                // disabled={props[ctrl.type]}
            />
        ))}

        <button
            // disabled={!props.purchaseAble}
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;
