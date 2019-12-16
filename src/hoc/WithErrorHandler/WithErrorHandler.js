import React from 'react';
import Modal from "../../components/UI/Modal/Modal"
import Aux from "../ReactAux/ReactAux";

const withErrorHandler = (WrappedComponent, axios) => {

    return (props) => {
        return (
            <Aux>
                <Modal show>
                    Something Didn't Work!!!
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        );
    }
};

export default withErrorHandler;
