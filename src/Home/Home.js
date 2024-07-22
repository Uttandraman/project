import React from 'react'
import './Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
  const navi=useNavigate();
  const about = () =>{
    navi('/about')
  }
  const contact = () =>{
    navi('/contact')
  }
  const sub = () =>{
    navi('/sub')
  }
  return (
    <div>
<ul className='home'>
<li className='list1'><a href="/signin">Log out</a></li>
  <li className='list'><a href="#" onClick={about}>About</a></li>
  <li className='list'><a href="#" onClick={contact}>Contact</a></li>
  <li className='list'><a href="#" onClick={sub}>Subscription</a></li>
  <li className='list'><a href="#">Home</a></li>
  <img src='./Images/Designer.png' width="50" height="50"></img>
</ul>

<center>
        <h2 style={{color:'white'}}>WELCOME TO STREAMVERSE{props.username}</h2>
        </center>
<div style={{padding: '30px'}}>
  <center>
  <a href='./comedy'>
   <img src='./Images/comedy.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./horror'>
   <img src='./Images/horror.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./motovlog'>
   <img src='./Images/moto.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
   </center>
   </div>
   <div style={{padding: '66.6px'}}>
    <center>
  <a href='./gaming'>
   <img src='./Images/game.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./vlog'>
   <img src='./Images/vlog.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./food'>
   <img src='./Images/food.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
   </center>
</div>
    </div>
  )
}

export default Home