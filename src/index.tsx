import React, {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reducers from "./Store/reducers/reducer";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import './Components/healpers/i18n'

const store = configureStore({reducer: reducers});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </Provider>
);