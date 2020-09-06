import React from 'react'
import './ContactUs.css'
import ContactTab from '../../components/ContactTab/ContactTab.js'
import ContactInformation from '../../components/ContactInformation/ContactInformation.js'

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className="contact-sec1">
                    <div className="contact-sec1-text">
                        <h1 className="contact-sec1-h1">Contact Us</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/contact">Contact Us</a></p>
                    </div>
                </div>
                <div className="contact-sec2">
                    <h2 className="contact-sec2-h2">Contact Information</h2>
                    <ContactInformation/>
                </div>
                <div className="contact-sec3">
                    <div className="container">
                        <ContactTab/>
                    </div>
                </div>
                <div className="contact-sec4">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.0891310344246!2d96.16938!3d16.7722406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed6d1bc16943%3A0x4a1098b6acd3183d!2sMyanmar%20Environmental%20Legal%20Services%20Limited!5e0!3m2!1sen!2smm!4v1599155767961!5m2!1sen!2smm" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            
        )
    }
}