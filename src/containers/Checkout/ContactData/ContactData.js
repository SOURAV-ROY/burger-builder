import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        // name: '',
        // email: '',
        // address: {
        //     street: '',
        //     postalCode: ''
        // },

        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP CODE'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliverMethod: {
                elementType: 'select',
                elementConfig: {
                    option: [
                        {value: 'fastest', displayValue: 'FASTEST'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },

        loading: false
    };


    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            // On production, calculate this on the server
            // so users cannot manipulate it before it's
            // sent to the server.
            price: this.props.price,

            // customer: {
            //     name: 'SOURAV ROY',
            //     address: {
            //         street: 'KHILKHET',
            //         zipCode: '1229',
            //         country: 'DHAKA'
            //     },
            //     email: 'sourav@admin.com'
            // },
            // deliverMethod: 'fastest'
        };

        // orders will be the name of the node created
        // in firebase
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    };

    render() {

        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form>

                {/*<Input elementType="..." elementConfig="..." value="..."/>*/}

                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                {/*<Input inputtype="input" type="text" name="name" placeholder="Your Name"/>*/}
                {/*<Input inputtype="input" type="email" name="email" placeholder="Your Email"/>*/}
                {/*<Input inputtype="input" type="text" name="street" placeholder="Street"/>*/}
                {/*<Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/>*/}

                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;

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
