import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
// import {setIngredients} from "../actions/burgerBuilder";

const initialState = {
    ingredients: null,

    // ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },

    // totalPrice: 20,
    error: false,
};

const INGREDIENT_PRICES = {
    salad: 25.33,
    cheese: 40.44,
    meat: 80.56,
    bacon: 30.66,
};

// ADD INGREDIENT **************************************************************************************************
const addIngredient = (state, action) => {

    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);

    const updateState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updateState);
};

//REMOVE INGREDIENT ************************************************************************************************
const removeIngredient = (state, action) => {

    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updatedIngs = updateObject(state.ingredients, updatedIng);

    const updateSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updateSt);
};

//SET INGREDIENT ***************************************************************************************************
const setIngredients = (state, action) => {

    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 10,
        error: false
    });
};

//FETCH INGREDIENT ************************************************************************************************
const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};
//*****************************************************************************************************************

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);

        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);

        default:
            return state;
    }

    // const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    // const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    //
    // const updateState = {
    //     ingredients: updatedIngredients,
    //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    // };
    //
    // return updateObject(state, updateState);

    // return {
    //     ...state,
    //     ingredients: {
    //         ...state.ingredients,
    //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    //     },
    //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    // };


    // const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    // const updatedIngs = updateObject(state.ingredients, updatedIng);
    //
    // const updateSt = {
    //     ingredients: updatedIngs,
    //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    // };
    // return updateObject(state, updateSt);

    // return {
    //     ...state,
    //     ingredients: {
    //         ...state.ingredients,
    //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    //     },
    //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    // };

    // case actionTypes.SET_INGREDIENTS:

    // return updateObject(state, {
    //     ingredients: {
    //         salad: action.ingredients.salad,
    //         bacon: action.ingredients.bacon,
    //         cheese: action.ingredients.cheese,
    //         meat: action.ingredients.meat
    //     },
    //     totalPrice: 10,
    //     error: false
    // });

    // return {
    //     ...state,
    //     ingredients: {
    //         salad: action.ingredients.salad,
    //         bacon: action.ingredients.bacon,
    //         cheese: action.ingredients.cheese,
    //         meat: action.ingredients.meat
    //     },
    //     totalPrice: 10,
    //     error: false
    // };

    // case actionTypes.FETCH_INGREDIENTS_FAILED:
    //
    //     return updateObject(state, {error: true});

    // return {
    //     ...state,
    //     error: true
    // };

    // default:
    //     return state;

};

export default reducer;
