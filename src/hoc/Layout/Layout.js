import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from "../ReactAux/ReactAux";
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
// import * as actions from "../../store/actions";

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />

                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);

// const layout = (props) => (
//     <Aux>
//         {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
//         <Toolbar/>
//         <SideDrawer/>
//         <main className={classes.Content}>
//             {props.children}
//         </main>
//     </Aux>
// );

