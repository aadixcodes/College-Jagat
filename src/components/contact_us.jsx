import React from 'react'
import '../style/contact_us.scss'

const contact_us = () => {
  return (
    <>
    <div className="contact-us">
    <div className="contact-us-heading">
        <div className="cu-line"></div>
        <div className="cu-head">Contact Us</div>
    </div>
    <div className="contact-us-content">
        <div className="cu-left">
            <h1>Get in touch</h1>
            <form className="form">
                <input type='text' name='name' placeholder='Name'/><br />
                <input type='email' name='email' placeholder='Email Address' required/><br />
                <textarea name='message' placeholder='Message'></textarea><br />
                
                <button type='submit' id='submit-btn'>Submit</button>
            </form>
        </div>
        <div className="cu-right">
        <img src={"../assets/Contactusimg.svg"} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default contact_us
