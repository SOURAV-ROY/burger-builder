import React, {Component} from 'react';
import Aux from "../../hoc/ReactAux";
import classes from './Layout.css';

class layout extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Header}>Toolbar , Sidebar</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default layout;
