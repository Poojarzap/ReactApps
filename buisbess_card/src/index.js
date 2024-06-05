import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Info from './components/Info_Sec';
import Content from './components/Contents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Info/>
  </React.StrictMode>
);

reportWebVitals();
