import React from 'react'
import './Otp.css'
import { MuiOtpInput } from 'mui-one-time-password-input'
import imgotp from '../Images/otp.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Otp = () => {
  const [otpnum, setOtpnum] = React.useState('')

  const handleChange = (newValue) => {
    setOtpnum(newValue)
  }

  return (
    <div>
     
      <fieldset className='otpf' style={{backgroundColor:"white"}}>
        <KeyboardBackspaceIcon />
        <div>
        <img src={imgotp} style={{marginLeft:"40px"}}></img>
        </div>
        <h3 style={{marginLeft:"120px"}}>Hello user,</h3>
        <p style={{textAlign:"center"}}>Thank you for registering with you. Please enter the OTP shared to your mobile.</p>
    <MuiOtpInput className="otp" style={{marginBottom:"50px",marginTop:"30px"}}value={otpnum} onChange={handleChange} />
    <p style={{textAlign:"center"}}>OTP not received?<a href='#' style={{color:"black"}}> <b>RESEND</b></a></p>
    <button style={{padding:"10px 110px",marginLeft:"30px",marginBottom:"10px",borderRadius:"10px" ,backgroundColor:"black",color:"white",marginTop:"10px"}}>SUBMIT</button>
    </fieldset>
    </div>
  )
}
export default Otp;