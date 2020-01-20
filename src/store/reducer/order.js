import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

//***************************************** PURCHASE BURGER START***************************************************
//PURCHASE INIT *********************************************************************************************
const purchaseInit = (state, action) => {

    return updateObject(state, {purchased: false});
};

//PURCHASE BURGER START *************************************************************************************
const purchaseBurgerStart = (state, action) => {

    return updateObject(state, {loading: true});
};

//PURCHASE BURGER SUCCESS ************************************************************************************
const purchaseBurgerSuccess = (state, action) => {

    const newOrder = updateObject(action.orderData, {id: action.orderId});

    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

//PURCHASE BURGER FAILED ************************************************************************************
const purchaseBurgerFail = (state, action) => {

    return updateObject(state, {loading: false});
};
//***************************************** PURCHASE BURGER END**********************************************

//##########################################^^^^^^^^^^^^^^^^^^^###################################################

//******************************************** FETCH ORDERS START******************************************
//FETCH ORDERS START **************************************************************************************
const fetchOrdersStart = (state, action) => {

    return updateObject(state, {loading: true});
};

//FETCH ORDERS SUCCESS ************************************************************************************
const fetchOrdersSuccess = (state, action) => {

    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

//FETCH ORDERS FAIL ***************************************************************************************
const fetchOrdersFail = (state, action) => {

    return updateObject(state, {loading: false});
};
//******************************************** FETCH ORDERS END*********************************************

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);

        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);

        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);

        default:
            return state;
    }
};

export default reducer;

// return updateObject(state, {loading: false});

// return updateObject(state, {
//     orders: action.orders,
//     loading: false
// });

// return updateObject(state, {loading: true});

// const newOrder = updateObject(action.orderData, {id: action.orderId});

// const newOrder = {
//     ...action.orderData,
//     id: action.orderId
// };

// return updateObject(state, {
//     loading: false,
//     purchased: true,
//     orders: state.orders.concat(newOrder)
// });

// return {
//     ...state,
//     purchased: false
// };

// return {
//     ...state,
//     loading: true
// };

// return {
//     ...state,
//     loading: false,
//     purchased: true,
//     orders: state.orders.concat(newOrder)
// };

// return {
//     ...state,
//     loading: false
// };

// return {
//     ...state,
//     loading: true
// };

// return {
//     ...state,
//     orders: action.orders,
//     loading: false
// };

// return {
//     ...state,
//     loading: false
// };

