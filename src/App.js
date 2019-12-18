import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {

    // state = {
    //   show: true
    // };
    //
    // UNSAFE_componentWillMount() {
    //     setTimeout(() => {
    //         this.setState({show: false});
    //     }, 5000);
    // }

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        {/*<Route path="/" exact component={BurgerBuilder}/>*/}
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                        {/*<BurgerBuilder/>*/}
                        {/*/!*{this.state.show ? <BurgerBuilder/> : null}*!/*/}
                        {/*<Checkout/>*/}
                    </Switch>
                </Layout>
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <Layout>
    //                 <BurgerBuilder/>
    //                 {/*{this.state.show ? <BurgerBuilder/> : null}*/}
    //                 <Checkout/>
    //             </Layout>
    //         </div>
    //     );
    // }
}

export default App;
