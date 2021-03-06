import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'antd/dist/antd.min.css';
import "react-phone-input-2/lib/style.css";
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)