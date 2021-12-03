import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './pages'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main/>
            <ToastContainer position={toast.TOP_RIGHT}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

