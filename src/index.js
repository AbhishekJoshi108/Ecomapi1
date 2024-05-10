import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';
import { Cartprovider } from './context/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     // <React.StrictMode>
          <BrowserRouter>
               <Cartprovider>
                    <App />

               </Cartprovider>

          </BrowserRouter>

     // </React.StrictMode>






);
