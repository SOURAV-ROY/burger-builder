import React, {Component} from 'react';
import Aux from "../../hoc/ReactAux";
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class layout extends Component {
    render() {
        return (
            <Aux>
                {/*<div className={classes.Header}>Toolbar , Sidebar</div>*/}
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default layout;
