import React, {Component} from 'react';

import ReactAux from "../../hoc/ReactAux";
import classes from './Layout.css';

class layout extends Component {
    render() {
        return (
            <ReactAux>
                <div>Toolbar , Sidebar</div>
                <main className={classes.hoo}>
                    {this.props.children}
                </main>
            </ReactAux>
        );
    }
}


export default layout;
