import React, { useState } from 'react'
import './Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
const Home1 = () => {
  
  return (
    <div className='horror' >
<ul className='home'>
  <li className='list' style={{margin:'10px'}}>
  <Stack>
<Avatar src="/broken-image.jpg"></Avatar>
    </Stack>
    </li>
  <li className='list'><a href="default.asp">About</a></li>
  <li className='list'><a href="news.asp">Contact</a></li>
  <li className='list'><a href="/subs">Subscription</a></li>
  <li className='list'><a href="/">Home</a></li>
  <img src='./Images/Designer.png' width="75" height="75"></img>
</ul>

<center>
        <h2>WELOCME TO STREAM VERSE</h2>
        </center>
<div style={{padding:'200px'}}>
  <center>
  <a href='./Yaanai'>
   <img  className="img1"src='./Images/movie.jpg' style={{marginLeft: '10px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./Songs'>
   <img className="img1"src='./Images/music.jpg' style={{marginLeft: '30px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
  <a href='./Sports'>
   <img className="img1"src='./Images/sports.jpg' style={{marginLeft: '30px', marginTop: '5px', borderRadius: '10px'}}width={280} height={155}/>
   </a>
   </center>
   <h1 className='h11'> MOVIES</h1>
   <h1 className='h22'>MUSIC</h1>
   <h1 className='h33'>SPORTS</h1>
   </div>
    </div>
  )
}

export default Home1