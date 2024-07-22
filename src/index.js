import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Otp from './Otp/Otp';
import AutoGrid from './Sub/Sub';
import Contact from './Contact/Contact';
import About from './About/About';
import Payment from './Payment/Payment';
import Home from './Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Payment/> */}
    {/* <AutoGrid/> */}
    {/* <Axios/> */}
    {/* <Home1/> */}
    {/* <About/> */}
    {/* <PaymentForm/> */}
    {/* <Confirmation/> */}
    {/* <SignUp/> */}
    {/* <Otp/> */}
    {/* <Contact/> */}
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
