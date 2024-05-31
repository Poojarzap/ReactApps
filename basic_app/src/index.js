import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Headers.js';
import './index.css';
import MainContent from './components/MainContents.js';
import Footer from './components/Footer.js';
import reportWebVitals from './reportWebVitals';


function Pages(){
  return(
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}

ReactDOM.render(<Pages/>, document.getElementById('root'))





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
