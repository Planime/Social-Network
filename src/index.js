import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './pages'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Main/>
                <ToastContainer position={toast.TOP_RIGHT}/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

