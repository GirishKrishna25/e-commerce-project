import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './Context/ProductContext';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import { FavoriteContextProvider } from './Context/FavoriteContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <FavoriteContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoriteContextProvider>
      </CartContextProvider>

    </ProductContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

