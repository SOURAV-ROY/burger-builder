import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We Hope it tastes Well!!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType="Danger"
                clicked={props.onCheckoutCancelled}
            >CANCEL
            </Button>

            <Button
                btnType="Success"
                clicked={props.onCheckoutContinued}
            >CONTINUE
            </Button>
        </div>
    );

};

export default checkoutSummary;
