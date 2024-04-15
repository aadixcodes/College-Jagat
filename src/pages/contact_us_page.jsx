import React from 'react'
import '../style/contact_us_page.scss'
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'
const contact_us_page = () => {
  return (
    <>
    <Navbar1 />

<section>
    
    <div class="section-header">
      <div class="cu-container">
        <h2>Contact Us</h2>
        <p>Have a question or want to get in touch with us? We'd love to hear from you! At College Jagat, we're committed to providing the best experience for our visitors. Whether you're a prospective student, a parent, an educator, or a member of the community, we're here to assist you. Feel free to reach out to us with any inquiries, feedback, or suggestions you may have. Our dedicated team is ready to help and will respond to your message promptly. Contact us today and let's start the conversation!</p>
      </div>
    </div>
    
    <div class="cu-container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <i className='bx bxs-map' ></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>Indore - Ujjain Road<br/> Gram Baroli,<br/>Madhya Pradesh 453111</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <i className='bx bxs-phone'></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>+91 62660 61914</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <i className='bx bx-envelope-open'></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>mail@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            {/* <form action="" id="contact-form" method="post"></form> */}
            <h2>Get in touch</h2>
            <div class="input-box">
              <input type="text" required="true" name="" placeholder="Full Name"/>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name="" placeholder="Email"/>
            </div>
            
            <div class="input-box">
              <textarea required="true" name="" placeholder="Type Your Message Here...."></textarea>
            </div>
            
            <div class="input-box" id='cu-submit-btn'> Submit
                {/* <input type="submit" value="send" name=""/> */}
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>


    <Footer />
    </>
  )
}

export default contact_us_page
