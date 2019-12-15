import React, {Component} from 'react';
// import React from 'react';
import Aux from "../ReactAux/ReactAux";
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />

                <SideDrawer
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

export default Layout;

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

