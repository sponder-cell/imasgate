import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


import "./Home.css"
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import 'swiper/css';

const partners = [
  {
    name: "Brown Foundation",
    logo: "https://www.brownfoundation.org/wp-content/uploads/2025/03/BF-Logo-2025-White.svg?t=1767910645",
    variant: "dark",
  },
  {
    name: "Access Bank",
    logo: "https://www.accessbankplc.com/Content/images/access-lg-logo.png",
  },
  {
    name: "Duke & Duchess College",
    logo: "https://dukeandduchesscollege.com.ng/wp-content/uploads/2022/02/Logo-300x213.png",
  },
  {
    name: "Coca cola",
    logo: "https://www.coca-colacompany.com/content/dam/company/us/en/homepage/homepage-images/icons/the-coca-cola-company-logo.svg",
  },
];



function Home() {
  return (
    <>

    <section id="home">
      <div className="home-intro">
        <h1 className="home-head">Standing With Persons Living With Disabilities <br /> — With Love, Dignity, and Hope</h1>
        <p>Every life has meaning. Every ability matters. Your support helps children, adults, and families living with disabilities live fully and feel seen</p>
      </div>

      <div className="home-btn">
        <button className='volunteers'><Link to="./Volunteer">Get Involved</Link></button>
        <button className='partner'><Link to="./Volunteer">Partner with us</Link></button>

      </div>
    </section>

    <section className="priority">
      <div className="priority-intro">
        <h5 className="extra-hd">Our Priority</h5>
        <h3>Changing Lives, One Act of Compassion at a Time</h3>
      </div>

      <div className="priority-grid">
        <div className="priority-card">
          <div className="priority-img">
            <img src="/images/gallery2.jpg" alt="" />

          </div>
          <div className="priority-info">
            <h4>Care & Support</h4>
            <p>Providing urgent welfare, mobility aids, and daily care to restore dignity and hope.</p>
            <div className="priority-link">
            <Link to="./Programs" className="read-more">Read More<span className="arrow-div">
        <FaArrowRight className="arrow" />
      </span>
 </Link>

            </div>


          </div>
        </div>
        <div className="priority-card">
          <div className="priority-img">
            <img src="https://public.files.download.flockmail.com/10828339/2641426737927168_1" alt="" />
          </div>
          <div className="priority-info">
            <h4>Education & Skills</h4>
            <p>Providing urgent welfare, mobility aids, and daily care to restore dignity and hope.</p>

            <div className="priority-link">
            <Link to="./Programs"  className="read-more">Read More    
               <span className="arrow-div">
        <FaArrowRight className="arrow" />
      </span>
 </Link>

            </div>

          </div>
        </div>
        <div className="priority-card">
          <div className="priority-img">
            <img src="https://public.files.download.flockmail.com/10828339/2641625741026304_1" alt="" />
          </div>
          <div className="priority-info">
            <h4>Advocacy & Awareness</h4>
            <p>Providing urgent welfare, mobility aids, and daily care to restore dignity and hope.</p>

            <div className="priority-link">
                        <Link to="./Programs"  className="read-more">Read More   
                            <span className="arrow-div">
        <FaArrowRight className="arrow" />
      </span>
 </Link>

            </div>


          </div>
        </div>

      </div>
    </section>

    <section id="about">
      <div className="about-grid">
        <div className='about-intro'>
        <h5 className='extra-hd'>About Us</h5>
        <h3>Who We Are & Why It Matters</h3>
        </div>

      <div className="about-text">
        <p>Imasgate Foundation is a nonprofit organization dedicated to supporting persons living with disabilities and the families who care for them. We provide care, skills, advocacy, and encouragement so no one is left invisible or alone. <br />
        <br />

        We believe disability is not the problem — neglect and exclusion are. That’s why we focus on practical support that restores dignity, builds confidence, and creates real opportunities.</p>
      </div>

      </div>

            <div className='about-img'>
        <img src="https://lh3.googleusercontent.com/p/AF1QipNLd71M4wwGWaiOGdZ2v2Qw5EE_aKcCR7Om7x0o=s680-w680-h510-rw" alt="" />
        <div className="image-quote">
          <p>"Disability does not define a person’s worth. With love, support, and inclusion, every individual can live with dignity, purpose, and hope. When society chooses understanding over stigma and care over neglect, persons living with disabilities are no longer invisible — they are empowered."</p>
        </div>
      </div>

    </section>
    <section id="gallery">
      <div className="gallery-grid">
        <div className="gallery-img"><img src="/images/gallery8.jpg" alt="" /></div>

        <div className="gallery-img"><img src="/images/gallery10.jpg" alt="" /></div>

        <div className="gallery-img"><img src="/images/gallery3.jpg" alt="" /></div>

        <div className="gallery-img"><img src="/images/gallery9.jpg" alt="" /></div>


        <div className="gallery-img"><img src="/images/gallery7.jpg" alt="" />
        
        </div>
              </div>




    </section>

    <section id="testimonial">
      <div className="testimonial-grid">
      <div className="testimonial-intro">
        <h5 className="extra-hd">Testimonials</h5>
        <h3>Real Stories From <br />Real People</h3>
        <p>Every story shared here represents a life touched, a burden lifted, and hope restored. These testimonials are voices of individuals and families who have experienced care, support, and inclusion through Imasgate Foundation. Their words remind us why compassion matters and why standing together can change lives.</p>
      </div>

      <div className="testimonial-carousel">


        <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>The Support I received Transformed My Life.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="https://public.files.download.flockmail.com/10828339/2641676385149952_1" alt="" />
            </div>
            <div className="name">
              <h4>Mary Johnson</h4>
              <p>Empowered Individual</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>The Organisation Truly Cares About Us.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="https://public.files.download.flockmail.com/10828339/2641678648873984_1" alt="" />
            </div>
            <div className="name">
              <h4>Brown Uko</h4>
              <p>Family Member</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>The Workshop Transformed MY life.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="https://public.files.download.flockmail.com/10828339/2641682837038080_1" alt="" />
            </div>
            <div className="name">
              <h4>Elizabeth Adaobi</h4>
              <p>Community Advocate</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>I learned So Much Through Their Workshop.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="https://public.files.download.flockmail.com/10828339/2641691153142784_1" alt="" />
            </div>
            <div className="name">
              <h4> John Akah</h4>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>


      </div>


      </div>
    </section>

    <section id="team">
      <div className="team-intro">
        <h5 className='extra-hd'>Our Team</h5>
        <h3>Meet Our Team Behind <br /> The Success Story</h3>

      </div>

      <div className="team-grid">
        <div className="team-card">
          <div className="team-img">
          <img src="/images/founder2.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Joseph Michael</h4>
            <p>Our Founder</p>
          </div>

        </div>
                <div className="team-card">
          <div className="team-img">
          <img src="/images/secretary.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Uko Brown</h4>
            <p>Secretary</p>
          </div>

        </div>


        <div className="team-card">
          <div className="team-img">
          <img src="/images/senior-physiotherapist.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mrs. Helen Peters</h4>
            <p>Senior Physiotherapist</p>
          </div>

        </div>
        <div className="team-card">
          <div className="team-img">
          <img src="/images/junior.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">James Bassey</h4>
            <p>Assistant Physiotherapist</p>
          </div>

        </div>
                        <div className="team-card">
          <div className="team-img">
          <img src="/images/lady2.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mrs. Bose Isaac</h4>
            <p>Head of Physiotherapy and Caring unit</p>
          </div>

        </div>

                        <div className="team-card">
          <div className="team-img">
          <img src="/images/project.jpg" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mary Uto</h4>
            <p>Project Manager</p>
          </div>

        </div>





      </div>
    </section>

 <section className="partners">
  <h5 className='extra-hd'>Our Partners</h5>
      <h3>United for Dignity & Hope</h3>
      <p className="partners-intro">
        We are proud to work alongside organizations and individuals who share
        our commitment to inclusion, dignity, and positive impact.
      </p>

      <div className="partners-grid">
        <div className="partners-card brown">
          <img src="https://www.brownfoundation.org/wp-content/uploads/2025/03/BF-Logo-2025-White.svg?t=1767910645" alt="" />
        </div>

        <div className="partners-card">
          <img src="https://www.accessbankplc.com/Content/images/access-lg-logo.png" alt="" />
        </div>
        <div className="partners-card duke">
          <img src="https://dukeandduchesscollege.com.ng/wp-content/uploads/2022/02/Logo-300x213.png" alt="" />
        </div>
        <div className="partners-card">
          <img src="https://www.coca-colacompany.com/content/dam/company/us/en/homepage/homepage-images/icons/the-coca-cola-company-logo.svg" alt="" />
        </div>

      </div>
    </section>

        <section id="get-involved">
      <div className="invole-intro">
        <h5 className='extra-hd'>Donate</h5>
        <h3>Join the Movement for Change</h3>
        <p>At Imasgate Foundation, we believe that lasting change begins with people who care — people like you. Your time, skills, and support can make a real difference in the lives of those who need it most.</p>
      </div>

      <div className="involve-buttons">
      <button className="donates">
      Donate
      <span className="arrow-div">
        <FaArrowRight className="arrow" />
      </span>
    </button>     

      </div>
    </section>

    <section id="contact">
      <div className="contact-grid">
        <div className="account-details">
          <div className="details-intro">
            <h3> <FaHeartbeat className='heart' /> Support Our Mission</h3>
            <p>Zero fees. 100% impact. Transfer directly.</p>
          </div>

          <div className="details">
            <div className="bank-name info">

              <h5>Bank Name</h5>
              <h4>GTB Bank</h4>
            </div>

            <div className="account-name info">
              <h5>Account Name</h5>
              <h4>Imasgate Foundation</h4>
            </div>

            <div className="account-number info">
              <h5>Account Number</h5>
              <h4>0775840307</h4>
            </div>
          </div>
        </div>

              <div className="contact-details">
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
    </section>



    
    </>
  )
}

export default Home