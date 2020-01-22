import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from "../../../hoc/ReactAux/ReactAux";

const sideDrawer = (props) => {
    //***************
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>

            <BackDrop show={props.open} clicked={props.closed}/>
            {/*<div className={classes.SideDrawer}>*/}

            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    {/*<Logo height="11%"/>*/}
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>

        </Aux>
    );
};

export default sideDrawer;
