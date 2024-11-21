import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; // for Bootstrap Javascript component
import 'font-awesome/css/font-awesome.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux'; // redux
import { Provider } from 'react-redux';
import ProductReducer from "./redux/reducers"; // reducer file

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Creating store and passing reducer

const root = ReactDOM.createRoot(document.getElementById('demo'));

root.render(<Provider store={store}>
    <App />
</Provider>);