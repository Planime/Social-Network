import React from 'react';
import ReactDOM from 'react-dom';
import {Main, Test} from './pages'
import {BrowserRouter} from 'react-router-dom'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
       <Main/>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

