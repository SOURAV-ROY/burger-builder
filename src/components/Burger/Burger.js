import React from 'react';
// import {withRouter} from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    console.log(props);
//  Awesome *********************************************************************************
//     const transformedIngredients = Object.keys(props.ingredients)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Adding Ingredients!!!</p>;
    }
//  Awesome *********************************************************************************
//  console.log(transformedIngredients);

    return (

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

        // <div className={classes.Burger}>
        //     <BurgerIngredient type="bread-top"/>
        //     <BurgerIngredient type="cheese"/>
        //     <BurgerIngredient type="bacon"/>
        //     <BurgerIngredient type="salad"/>
        /*    <BurgerIngredient type="meat"/>*/
        /*    <BurgerIngredient type="cheese"/>*/
        /*    <BurgerIngredient type="bread-bottom"/>*/
        /*</div>*/
    );
};

export default burger;
// export default withRouter(burger);
