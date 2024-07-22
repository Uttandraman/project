import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom';
const About = (props) => {
  /*
    const nav=useNavigate();
    const subscription = () =>{
        nav('/sub')
    }
    const abo = () =>{
      nav('/contact')
    }*/
  return (
    <div className='f1'>
        
<fieldset className='about'>
        <center>
        <h1>Welcome to Streamverse!{props.data}</h1>
        </center>
        <p>At Streamverse, we are passionate about delivering the best entertainment experience to our users. Whether you're a movie buff, a TV series fanatic, or a music enthusiast, we've got you covered with a vast library of content curated just for you.</p>
        <ul>
            <li><b>Our Journey: </b></li>
            <p>Founded on the belief that entertainment should be accessible to everyone, we embarked on a journey to create a platform that brings together the best of movies, TV shows, and music from around the globe. Since our inception, we've been dedicated to providing seamless streaming experiences, innovative features, and personalized recommendations to enhance your entertainment journey.</p>
            <li><b>What Sets Us Apart: </b></li>
            <p>What sets us apart is our commitment to quality and diversity. We collaborate with top studios, production houses, and artists to bring you a diverse range of content across genres and languages. From Hollywood blockbusters to indie gems, from binge-worthy TV series to chart-topping music albums, there's something for everyone on Streamverse.</p>
            <li><b>Our Team: </b></li>
            <p>Behind the scenes, we have a team of passionate individuals who work tirelessly to ensure that you have the best possible streaming experience. From content curation and licensing to platform development and customer support, every member of our team is dedicated to making your time with us enjoyable and memorable.</p>
            <li><b>Your Experience Matters: </b></li>
            <p>At Streamverse, we put our users first. Your feedback shapes the decisions we make and the improvements we implement. We are constantly evolving and innovating to provide you with new features, better recommendations, and an overall enhanced experience.</p>
            <li><b>Join Us:</b></li>
            <p>Whether you're a casual viewer looking for your next favorite movie, a dedicated binge-watcher craving the latest TV series, or a music lover seeking the perfect playlist, we invite you to join us on this exciting journey of entertainment exploration. Sign up now and let the streaming adventure begin!</p><br></br>
            <p>Thank you for choosing Streamverse for your entertainment needs. Sit back, relax, and enjoy the show!</p>
        </ul>
        </fieldset>
    </div>
  )
}

export default About