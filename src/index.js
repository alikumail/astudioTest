import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/app.scss";
import App from './App';
import DataTableProvider from './contexts/DataTableContext'
import UsersProvider from './contexts/UsersContext'
import ProductsProvider from './contexts/ProductsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <DataTableProvider>
          <UsersProvider>
            <ProductsProvider>
             <App />
            </ProductsProvider>
        </UsersProvider>
        </DataTableProvider>
    </BrowserRouter>
);

