import React, {Component} from 'react';
import Aux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state={};
    // }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>

                <div>Burger Builder</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;
