import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./Volunteer.css";

function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/mpqwvwzv", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        console.error("Formspree submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section id="involve">
      <div id="hero">
        <h1>Get in Touch</h1>
        <p className='hero-p'>
          Whether you want to volunteer, partner with us, or make a donation, we'd love to hear from you.
        </p>
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
            <p>31 Kokumo St, Lambe-Akute 112107, Ogun State</p>
          </div>
            </div>

            <div className="contact">
            <div className="icon-div">
              <IoIosMail className='contact-icon' />
            </div>
          <div className="contact-info">
            <i>E-mail</i>
            <p>info@imasgatefoundation.org</p>
          </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="form">
            <h4>Send Us a Message</h4>

            {success && <p className="success">Message sent successfully!</p>}

            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}

              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <small className="error">{errors.message}</small>}

              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
