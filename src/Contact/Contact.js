import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='f1'>
        <fieldset className='con'>
        <center>
        <h1>Contact Us</h1>
        </center>
        <p>We're here to assist you with any inquiries, feedback, or concerns you may have. Please don't hesitate to reach out to us using the following contact options:</p>
        <ul>
            <li><b>Customer Support:</b></li>
            <p>For immediate assistance with technical issues, account inquiries, billing questions, or any other support-related matters, our dedicated customer support team is available to help you 24/7. You can reach them via:</p>
            <li>Email: <a href="mailto:support@streamverse.com"> support@streamverse.com </a></li>
            <li>Phone: 1-800-787-3267</li>
            <li>Live Chat: Available on our website during business hours</li>
            <li><b>General Inquiries:</b></li>
            <p>Have a general question about our service, content offerings, or partnerships? Feel free to contact us via:</p>
            <li><a href="mailto:info@streamverse.com">info@streamverse.com</a></li>
            <li>Social Media: Reach out to us on our official social media channels (Facebook, Twitter, Instagram) with your inquiries.</li>
            <li><b>Feedback:</b></li>
            <p>We value your feedback and strive to continuously improve our platform. If you have any suggestions, comments, or ideas for how we can enhance your streaming experience, please share them with us at</p>
            <li>Email: <a href="mailto:feedback@streamverse.com">feedback@streamverse.com</a></li>
            <li><b>Content Licensing:</b></li>
            <p>If you're a content creator, distributor, or rights holder interested in partnering with us or licensing your content to be featured on our platform, please contact our content acquisition team at:</p>
            <li>Email:  <a href="mailto:content@streamverse.com">content@streamverse.com</a></li>
            <li><b>Corporate Headquarters:</b></li>
            <p>If you need to reach us via mail or visit our corporate headquarters, you can find us at:</p>
            <p>Streamverse</p>
            <p>123 Entertainment Ave</p>
            <p>Coimbatore, Tamilnadu 641042</p>
            <p>India</p>
            <p>Thank you for choosing streamverse. We look forward to assisting you and providing you with the best streaming experience possible!</p>
        </ul>
        </fieldset>
    </div>
  )
}

export default Contact