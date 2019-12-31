import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
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
        // console.log(this.props.ingredients);

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,

            price: this.props.price,

            customer: {
                name: 'Sourav Roy',
                address: {
                    street: 'Dhaka',
                    zipCode: '1229',
                    country: 'Bangladesh'
                },
                email: 'sourav@admin.com'
            },
            deliveryMethod: 'Fastest'
        };

//      POST SUBMIT DATA IN FIREBASE ***********************************************
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });

        // this.props.history.push('/checkout');
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="PostalCode"/>

                    <Button
                        btnType="Success"
                        clicked={this.orderHandler}
                    >
                        ORDER
                    </Button>

                </form>

            </div>
        );
    }

}

export default ContactData;
