import React, {Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                // console.log(res.data);
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        //Makes Perfect Key *********
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});

            })
            .catch(err => {
                this.setState({loading: false});
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                           ingredients={order.ingredients}
                           price={order.price}
                    />
                ))}
                {/*<Order/>*/}
                {/*<Order/>*/}

            </div>
        );
    }

}

// export default Orders;
export default withErrorHandler(Orders, axios);
