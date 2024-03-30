import React from 'react'
import '../style/hero.scss'
import Navbar from './navbar'
import About_college_jagat from './about_college_jagat'
import Our_mission from './our_mission'
import About_abhyudaya from './about_abhyudaya'
import Contact_us from './contact_us'
import Footer from './footer'
import Navbar1 from './navbar1'

const hero = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar1 />
    <div className="hero">
        <div className="hero-left-side">
            <h1>COLLEGE <span>JAGAT</span></h1>
            <h2>Connecting Campuses, Empowering Minds</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatibus ex, iure non vel explicabo ipsa in, nisi dolore ducimus aut repellat corrupti. Aspernatur rem temporibus facere, sunt nam ipsa commodi. Maxime quidem dicta, nisi fugit iste aliquam velit dignissimos exercitationem, quibusdam neque, aperiam magnam ipsum impedit quisquam omnis? Labore.</p>
        </div>
        <div className="hero-right-side">
            <img src={'../assets/hero.gif'} alt="" />
        </div>
    </div>
    <About_college_jagat />
    <Our_mission />
    <About_abhyudaya />
    <Contact_us />
    <Footer />
    </>
  )
}

export default hero
