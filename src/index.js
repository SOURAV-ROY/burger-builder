import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Layout from "./components/Layout/Layout";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Layout />, document.getElementById('layout'));
// ReactDOM.render(<App />, document.getElementById('layout'));
registerServiceWorker();
