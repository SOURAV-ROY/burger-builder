import React, {Component} from 'react';
// import React from 'react';
import Aux from "../../hoc/ReactAux";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (
            <Aux>
                {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
                <Toolbar/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
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

