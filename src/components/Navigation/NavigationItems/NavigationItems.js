import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>

        {!props.isAuthenticated
            ? <NavigationItem link="/auth">LogIn</NavigationItem>
            : <NavigationItem link="/logout">LogOut</NavigationItem>
        }

    </ul>
);

export default navigationItems;
