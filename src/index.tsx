import React from "react";
//import * as ReactDOM from 'react-dom/client';
//import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
//import {createStore} from "redux";
import reducers from "./Store/reducers/reducer";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
//import { composeWithDevTools } from 'redux-devtools-extension';


//import { createStore, compose, applyMiddleware } from 'redux';

//import thunk from 'redux-thunk';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer: reducers});

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);