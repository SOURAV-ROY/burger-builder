import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    };

    orderHandler = () => {

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
