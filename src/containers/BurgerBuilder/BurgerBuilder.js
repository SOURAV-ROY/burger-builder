import React, {Component} from 'react';
import ReactAux from "../../hoc/ReactAux";
import BurgerCSS from './BurgerBuilder.css';

class BurgerBuilder extends Component{
    render() {
        return(
            <ReactAux>
                <div>Burger</div>
                <div>Build Control</div>
            </ReactAux>
        );
    }

}

export default BurgerBuilder;
