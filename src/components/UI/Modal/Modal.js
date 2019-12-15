import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from "../../../hoc/ReactAux/ReactAux";
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        // if (nextProps.show != this.props.show){}
        return nextProps.show !== this.props.show;
    }

    UNSAFE_componentWillUpdate() {
        console.log('[Modal] WillUpdate')
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }

}

export default Modal;


// const modal = (props) => (
//     <Aux>
//         <BackDrop show={props.show} clicked={props.modalClosed}/>
//         <div
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? '1' : '0'
//             }}
//         >
//             {props.children}
//         </div>
//     </Aux>
// );
//
// export default modal;
