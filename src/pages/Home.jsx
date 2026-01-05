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





function Home() {
  return (
    <>

    <section id="home">
      <div className="home-intro">
        <h1 className="home-head">Standing With Persons Living With Disabilities <br /> — With Love, Dignity, and Hope</h1>
        <p>Every life has meaning. Every ability matters. Your support helps children, adults, and families living with disabilities live fully and feel seen</p>
      </div>

      <div className="home-btn">
        <button className='volunteers'>Get Involved</button>
        <button className='partner'>Partner with us</button>

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
            <img src="https://public.files.download.flockmail.com/10828339/2641426737927168_1" alt="" />

          </div>
          <div className="priority-info">
            <h4>Care & Support</h4>
            <p>Providing urgent welfare, mobility aids, and daily care to restore dignity and hope.</p>
            <div className="priority-link">
            <Link className="read-more">Read More<span className="arrow-div">
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
            <Link  className="read-more">Read More    
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
                        <Link  className="read-more">Read More   
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
        <div className="gallery-img"><img src="https://images.unsplash.com/photo-1740572497450-4f4f2d3be984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9zJTIwb2YlMjBhZnJpY2FuJTIwcGVvcGxlJTIwd2l0aCUyMGRpc2FiaWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>

        <div className="gallery-img"><img src="https://plus.unsplash.com/premium_photo-1669592559882-10977f5eff31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9zJTIwb2YlMjBhZnJpY2FuJTIwcGVvcGxlJTIwd2l0aCUyMGRpc2FiaWxpdGllc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>

        <div className="gallery-img"><img src="https://plus.unsplash.com/premium_photo-1670513672760-c6efd531da1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBob3RvcyUyMG9mJTIwYWZyaWNhbiUyMHBlb3BsZSUyMHdpdGglMjBkaXNhYmlsaXRpZXN8ZW58MHx8MHx8fDA%3D" alt="" /></div>

        <div className="gallery-img"><img src="https://media.istockphoto.com/id/2212587946/photo/multiethnic-youth-group-collaborating-in-a-coworking-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=JUe0Qf2I0JNFVCex_reUJB7ciYaYgwO5D36EQfQqHO8=" alt="" /></div>


        <div className="gallery-img"><img src="https://media.istockphoto.com/id/1345489100/photo/portrait-of-a-young-woman-with-special-needs.webp?a=1&b=1&s=612x612&w=0&k=20&c=bG_8rU8CfSAmwAmshJDmgixLRX59oDP2LHqohsNzk6k=" alt="" />
        
        </div>
              </div>




    </section>

    <section id="testimonial">
      <div className="testimonial-grid">
      <div className="testimonial-intro">
        <h5 className="extra-hd">Testimonials</h5>
        <h3>Real Stories From <br />Real People</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facere dolorum consequuntur. Labore officia quo rem molestiae repudiandae sequi maiores ex reprehenderit quis iste? Nemo voluptatibus delectus iure necessitatibus mollitia.</p>
      </div>

      <div className="testimonial-carousel">


        <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>Grace, a single mother of two, joined our women empowerment program in 2023. With the training and resources she received, she now runs a small business that supports her family and helps other women in her community do the same.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="boy.jpg" alt="" />
            </div>
            <div className="name">
              <h4>Mr.Ayobami</h4>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>Grace, a single mother of two, joined our women empowerment program in 2023. With the training and resources she received, she now runs a small business that supports her family and helps other women in her community do the same.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="boy.jpg" alt="" />
            </div>
            <div className="name">
              <h4>Mr.Ayobami</h4>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>Grace, a single mother of two, joined our women empowerment program in 2023. With the training and resources she received, she now runs a small business that supports her family and helps other women in her community do the same.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="boy.jpg" alt="" />
            </div>
            <div className="name">
              <h4>Mr.Ayobami</h4>
              <p>Assistant Manager</p>
            </div>
          </div>
        </div>
                <div className='testimonial-card'>
          <div className="quote-div">
            <FaQuoteLeft className='quote'/>

          </div>
          <div className="testimonial-content">
            <p>Grace, a single mother of two, joined our women empowerment program in 2023. With the training and resources she received, she now runs a small business that supports her family and helps other women in her community do the same.</p>
          </div>
          <div className="testimonial-profile">
            <div className="headshot">
              <img src="boy.jpg" alt="" />
            </div>
            <div className="name">
              <h4>Mr.Ayobami</h4>
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
          <img src="https://media.istockphoto.com/id/2099408907/photo/smiling-young-businessman-standing-with-his-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=N0rshqVGbuvJ6zFWKLzkwbulYEqqx1mtWzu_eSSOQXE=" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mr. Asogwa</h4>
            <p>Our Founder</p>
          </div>

        </div>
                <div className="team-card">
          <div className="team-img">
          <img src="https://media.istockphoto.com/id/2099408907/photo/smiling-young-businessman-standing-with-his-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=N0rshqVGbuvJ6zFWKLzkwbulYEqqx1mtWzu_eSSOQXE=" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mr. Asogwa</h4>
            <p>Our Founder</p>
          </div>

        </div>


        <div className="team-card">
          <div className="team-img">
          <img src="https://media.istockphoto.com/id/1194669537/photo/handsome-young-african-man-in-formalwear.webp?a=1&b=1&s=612x612&w=0&k=20&c=bFZhncLEnBmq5kFRCt1d248C-PW6T0EKP5xPKsB8Mng=" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mr. Asogwa</h4>
            <p>Our Founder</p>
          </div>

        </div>
        <div className="team-card">
          <div className="team-img">
          <img src="https://media.istockphoto.com/id/1488389611/photo/smile-leadership-and-portrait-of-black-man-confident-ceo-with-mockup-and-blurred-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=6T8W6FBlELrRnoD7K9ughJXeKIwoYN752_fnsb5vLS4=" alt="" />
        </div>
         <div className="team-info">
            <h4 className="name">Mr. Asogwa</h4>
            <p>Our Founder</p>
          </div>

        </div>


      </div>
    </section>
        <section id="get-involved">
      <div className="invole-intro">
        <h5 className='extra-hd'>Get Involved</h5>
        <h3>Join the Movement for Change</h3>
        <p>At Imasgate Foundation, we believe that lasting change begins with people who care — people like you. Your time, skills, and support can make a real difference in the lives of those who need it most.</p>
      </div>

      <div className="involve-buttons">
        <button className="volunteer">Become A Volunteer</button>

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
              <h4>Access Bank</h4>
            </div>

            <div className="account-name info">
              <h5>Account Name</h5>
              <h4>Chukwuwetalu Prayer Chibuike</h4>
            </div>

            <div className="account-number info">
              <h5>Account Number</h5>
              <h4>1315669058</h4>
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
    </section>



    
    </>
  )
}

export default Home