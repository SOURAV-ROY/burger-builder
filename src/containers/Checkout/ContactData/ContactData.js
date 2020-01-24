import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateObject, checkValidity} from '../../../shared/utility';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from '../../../store/actions/index';

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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP CODE'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliverMethod: {
                elementType: 'select',
                elementConfig: {
                    option: [
                        {value: 'fastest', displayValue: 'FASTEST'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                // value: '',
                value: 'fastest',
                validation: {},
                valid: true
                // valid: false
                // validation: {
                //     required: true
                // }
            }
        },
        formIsValid: false
        // loading: false
    };


    orderHandler = (event) => {
        event.preventDefault();
        // this.setState({loading: true});

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            // ingredients: this.props.ingredients,
            ingredients: this.props.ings,

            // On production, calculate this on the server
            // so users cannot manipulate it before it's
            // sent to the server.
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        };

        // this.props.onOrderBurger(order);
        this.props.onOrderBurger(order, this.props.token);

        // orders will be the name of the node created
        // in firebase
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({loading: false});
        //         this.props.history.push('/');
        //     })
        //     .catch(error => {
        //         this.setState({loading: false});
        //     });
    };

    // checkValidity(value, rules) {
    //     let isValid = true;
    //
    //     if (!rules) {
    //         return true;
    //     }
    //
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }
    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid;
    //     }
    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid;
    //     }
    //     return isValid;
    // }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);

        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        updatedOrderForm[inputIdentifier] = updatedFormElement;
        // console.log(updatedFormElement);

        let formIsValid = true;

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        console.log(formIsValid);

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
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
            <form onSubmit={this.orderHandler}>

                {/*<Input elementType="..." elementConfig="..." value="..."/>*/}

                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}

                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        // if (this.state.loading) {
        if (this.props.loading) {
            form = <Spinner/>;

        }

        return (
            <div className={classes.ContactData}>
                <h4>Please Enter Your Contact Details</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
