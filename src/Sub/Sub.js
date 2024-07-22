import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';
import './Sub.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:'white',
  padding: theme.spacing(1),
  //textAlign: 'center',
  //color: 'black',
}));

export default function AutoGrid() {
  const [color1,setColor1]=useState("white");
  const [color2,setColor2]=useState("white");
  const [color3,setColor3]=useState("white");
  const [col1,setCol1]=useState("black");
  const [col2,setCol2]=useState("black");
  const [col3,setCol3]=useState("black");
  const [op1,setOp1]=useState("1");
  const [op2,setOp2]=useState("1");
  const [op3,setOp3]=useState("1");
  const change1= () =>{
    setCol1("white")
    setColor1("grey")
    setCol2("black")
    setColor2("white")
    setCol3("black")
    setColor3("white")
    setOp1("1")
    setOp2("0.7")
    setOp3("0.7")
  }
  const change2= () =>{
    setCol2("white")
    setColor2("grey")
    setCol1("black")
    setColor1("white")
    setCol3("black")
    setColor3("white")
    setOp2("1")
    setOp1("0.7")
    setOp3("0.7")
  }
  const change3= () =>{
    setCol3("white")
    setColor3("grey")
    setCol1("black")
    setColor1("white")
    setCol2("black")
    setColor2("white")
    setOp3("1")
    setOp1("0.7")
    setOp2("0.7")
  }
  return (
    <div>
      <center>
      <h1>SUBSCRIPTION</h1>
      </center>
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={3}>
        <div className='grid1' style={{backgroundColor:color1,opacity:op1,color:col1}}>
        <Grid item xs={15} md={30}>
          
            <center>
            <h2 style={{color:col1}}>BASIC</h2>
            <h1 style={{color:col1}}>$2</h1>
            </center>
            <ul className='g1'>
              <li style={{color:col1}}><VerifiedIcon color="success" className='ver'/> All Content</li><br></br>
              <li style={{color:col1}}><VerifiedIcon color="success" className='ver'/> 1 device can be logged in</li><br></br>
              <li style={{color:col1}}><VerifiedIcon color="success" className='ver'/> HD 720p Max video quality</li><br></br>
              <li style={{color:col1}}><VerifiedIcon color="success" className='ver'/> Stereo audio quality</li><br></br><br></br>
            </ul>
            <br></br>
            <center>
            <button className='sub1' onClick={change1}>Subscribe</button>
            </center>
          
        </Grid>
        </div>
        <div className='grid2' style={{backgroundColor:color2,opacity:op2}}>
        <Grid item xs={15}>
            <center>
              <h2 style={{color:col2}}>SUPER</h2>
              <h1 style={{color:col2}}>$8</h1>
            </center>
            <ul className='g1'>
              <li style={{color:col2}}><VerifiedIcon color="success" className='ver'/> All Content</li><br></br>
              <li style={{color:col2}}><VerifiedIcon color="success" className='ver'/> Watch on TV or Laptop</li><br></br>
              <li style={{color:col2}}><VerifiedIcon color="success"className='ver'/> 2 devices can be logged in</li><br></br>
              <li style={{color:col2}}><VerifiedIcon color="success" className='ver'/> Full HD 1080p Max video quality</li><br></br>
              <li style={{color:col2}}><VerifiedIcon color="success" className='ver'/> Dolby Atmos audio quality</li><br></br>
            </ul>
            <center>
            <button className='sub2' onClick={change2}>Subscribe</button>
            </center>
        </Grid>
        </div>
        <div className='grid3' style={{backgroundColor:color3,opacity:op3,color:col3}}>
        <Grid item xs={15}>
        <center>
              <h2 style={{color:col3}}>PREMIUM</h2>
              <h1 style={{color:col3}}>$12</h1>
            </center>
            <ul className='g1'>
              <li style={{color:col3}}><VerifiedIcon color="success" className='ver'/> All Content</li><br></br>
              <li style={{color:col3}}><VerifiedIcon color="success" className='ver'/>Ads free movies and shows</li><br></br>
              <li style={{color:col3}}><VerifiedIcon color="success" className='ver'/> Watch on TV or Laptop</li><br></br>
              <li style={{color:col3}}><VerifiedIcon color="success"className='ver'/> 4 devices can be logged in</li><br></br>
              <li style={{color:col3}}><VerifiedIcon color="success" className='ver'/> 4K 2160p Max video quality</li><br></br>
              <li style={{color:col3}}><VerifiedIcon color="success" className='ver'/> Dolby Atmos audio quality</li><br></br>
            </ul>
            <center>
            <button className='sub3' onClick={change3}>Subscribe</button>
            </center>
        </Grid>
        </div>
      </Grid>
    </Box>
    </div>
  );
}