import React, { useState } from 'react'
import img1 from '../Images/atm1.png'
import img2 from '../Images/sim.png'
import img3 from '../Images/master.png'
import './Payment.css'
const Payment = () => {
  const [num,setNum]=useState();
  const handlenum = (e) =>{
    setNum(e.target.value)
  }
  return (
    /*<div>
    <fieldset className='payment'>
        <img src={img1} className='pimg'></img><br></br>
        <input className="pay" type="text" placeholder='Name'></input><br></br>
        <input className="pay" type="password" placeholder='Card Number'></input><br></br>
        <input className="pay2" type="text" placeholder='MM/YY'></input>
        <input className="pay3" type="text" placeholder='CCV'></input><br></br>
        <button className='pbut'>PURCHASE</button>
    </fieldset>
    </div>*/
    <div className='payment'>
      <fieldset>
        <img src={img2} className='sim'></img>
        <img src={img3} className='master'></img><br></br>
        <h2>{num}</h2>
      </fieldset>
      <br/>
        <input className='cardnum' type="text"></input>
        <label className="la1" type="text">Valid Thru</label><br></br>
        <input className='name' type="text"></input>
        <input className='date' type="text"></input>
      <input type="text" onChange={handlenum}></input>
    </div>
  );
};

export default Payment