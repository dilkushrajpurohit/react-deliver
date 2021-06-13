import React from 'react';  
import ReactDOM from 'react-dom';  
// import App from './App.jsx';  
// import { BrowserRouter } from 'react-router-dom';
import Header from './App.jsx';
import {Slider} from './App.jsx'


  
ReactDOM.render(
    <>
{/* <BrowserRouter> */}

<Header/>

<Slider/>

{/* </BrowserRouter> */}
</>
, document.getElementById('app'));  
