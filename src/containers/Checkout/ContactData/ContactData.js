import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false

    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            // On production, calculate this on the server
            // so users cannot manipulate it before it's
            // sent to the server.
            price: this.props.price,
            customer: {
                name: 'SOURAV ROY',
                address: {
                    street: 'KHILKHET',
                    zipCode: '1229',
                    country: 'DHAKA'
                },
                email: 'sourav@admin.com'
            },
            deliverMethod: 'fastest'
        };

        // orders will be the name of the node created
        // in firebase
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    };

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;

        }

        return (
            <div className={classes.ContactData}>
                <h4>Please enter your Contact Details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
