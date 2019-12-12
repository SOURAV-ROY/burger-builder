// import React, {Component} from 'react';
import React from 'react';
import Aux from "../../hoc/ReactAux";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

// class layout extends Component {
//     render() {
//         return (
//             <Aux>
//                 {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
//                 <Toolbar/>
//                 <main className={classes.Content}>
//                     {this.props.children}
//                 </main>
//             </Aux>
//         );
//     }
// }
