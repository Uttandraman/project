import Raect from 'react';
import "./Subscription.css"
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
const Subsrciption = () => {
  const navi=useNavigate();
  const terms = () =>{
    navi('/terms')
  }
  const about= () =>{
    navi('/about')
  }
  const sub = () =>{
    navi('/sub')
  }
  const con = () =>{
    navi('/contact')
  }
  return (
    <div>
      <ul className='home'>
  <li className='list1'><a href="/signin">Log out</a></li>
  <li className='list'><a href="#" onClick={about}>About</a></li>
  <li className='list'><a href="#" onClick={con}>Contact</a></li>
  <li className='list'><a href="#" onClick={sub}>Subscription</a></li>
  <li className='list'><a href="/home">Home</a></li>
  <img src='./Images/Designer.png' width="50" height="50"></img>
</ul>
        <fieldset>
            <center>
            <h1 className='sub'>Subscription</h1>
            <p>Do you want to watch movies or videos? Subscribe now!</p>
            <input type="text" placeholder='Name'></input><br></br><br></br>
            <input type='text' placeholder='E-mail'></input><br></br><br></br>
            <button>Subscribe</button><br></br><br></br>
            <input type="checkbox" id="vehicle" name="vehicle"></input>
            <label for="vehicle">I accept the </label>
            <a href="#" onClick={terms}>terms and conditions</a>
            </center>
        </fieldset>
    </div>
  )
}

export default Subsrciption