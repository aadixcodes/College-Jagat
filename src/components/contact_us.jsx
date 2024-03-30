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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2bd6sFfIt4I?si=TNq9c9DHB892hvBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
    </div>
    </>
  )
}

export default contact_us
