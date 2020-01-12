import React from 'react';
import classes from './Order.css';

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            className={classes.Ingredients}
            key={ig.name}>{ig.name} <span className={classes.Items}>{ig.amount}</span></span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price = <strong>{Number.parseFloat(props.price).toFixed(2)} &#2547;</strong></p>
        </div>
    );
};

export default order;
