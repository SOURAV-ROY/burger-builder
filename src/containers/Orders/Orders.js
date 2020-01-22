import React, {Component} from 'react';
import {connect} from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from '../../store/actions/index';
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {

    // state = {
    //     orders: [],
    //     loading: true
    // };

    componentDidMount() {

        this.props.onFetchOrders(this.props.token);

        // axios.get('/orders.json')
        //     .then(res => {
        //         // console.log(res.data);
        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 //Makes Perfect Key *********
        //                 id: key
        //             });
        //         }
        //         this.setState({loading: false, orders: fetchedOrders});
        //
        //     })
        //     .catch(err => {
        //         this.setState({loading: false});
        //     })
    }

    render() {
        let orders = <Spinner/>;

        if (!this.props.loading) {
            orders =
                this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))
        }

        return (
            <div>
                {orders}

                {/*{this.state.orders.map(order => (*/}
                {/*{this.props.orders.map(order => (*/}
                {/*    <Order key={order.id}*/}
                {/*           ingredients={order.ingredients}*/}
                {/*           price={order.price}*/}
                {/*    />*/}
                {/*))}*/}

                {/*<Order/>*/}
                {/*<Order/>*/}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
