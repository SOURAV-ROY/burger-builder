import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal"
import Aux from "../ReactAux/ReactAux";

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        };

        // componentDidMount() {
        UNSAFE_componentWillMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        };

        errorConfirmHandler = () =>{
          this.setState({error: null})
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        // clicked={this.errorConfirmHandler}
                        modalClosed={this.errorConfirmHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                        {/*Something Didn't Work!!!*/}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }

    }
};

export default withErrorHandler;

// return (props) => {
//     return (
//         <Aux>
//             <Modal show>
//                 Something Didn't Work!!!
//             </Modal>
//             <WrappedComponent {...props}/>
//         </Aux>
//     );
// }
