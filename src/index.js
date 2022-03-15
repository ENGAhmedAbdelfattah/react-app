/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './Main.css';

// Add libirary
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

//Component
import App from './component/App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
  document.getElementById('root')
);

