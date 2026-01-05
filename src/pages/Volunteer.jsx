import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./Volunteer.css";


function Volunteer() {
  return (
    <>
    <section id="involve">
      <div id="hero">
        <h1>Get in Touch</h1>
        <p className='hero-p'>Whether you want to volunteer, partner with us, or make a donation, we'd love to hear from you.</p>
      </div>

      <div className="involve-grid">
        <div className="left-side">
                        <div className="contact-detail">
                  <div className="contact">
                    <div className="icon-div">
                      <FaPhoneAlt className='contact-icon' />
                    </div>
                    <div className="contact-info">
                      <i>Phone</i>
                      <p>0803 343 3010</p>
                    </div>
                  </div>
                  <div className="contact">
                    <div className="icon-div">
                      <FaLocationDot className='contact-icon' />
                    </div>
                    <div className="contact-info">
                      <i>Address</i>
                      <p>31 Kokumo St, Lambe, Ajuwon/Akute 112107, Ogun State</p>
                    </div>
                  </div>
                  <div className="contact">
                    <div className="icon-div">
                      <IoIosMail className='contact-icon' />
                    </div>
                    <div className="contact-info">
                      <i>E-mail</i>
                      <p>chukwuwetaluprayet@gmail.com</p>
                    </div>
                  </div>
          
                </div>

      </div>

      <div className="right-side">
        <div className="form">
          <h4>Send Us a Message</h4>
        <form action="">
          <div className="name">
          <label htmlFor="">Full Name</label>
          <input type="text" />
          </div>
          <div className="email">
          <label htmlFor="">Email-Address</label>
          <input type="email" />
          </div>

          <label htmlFor="">Message</label>

          <textarea name="" id="" cols="30" rows="10"></textarea>

          <button className='submit' type="submit">Submit</button>

          
        </form>

        </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default Volunteer