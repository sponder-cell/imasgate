import React from 'react'
import "./About.css"

function About() {
  return (
    <>
    <section id="hero">
      <h1>About US</h1>
      <p>The driving force behind the Martins Vincent Otse Initiative.</p>
    </section>
    <section id="about-info">
      <div className="about-grid">
        <div className="about-img">
          <img src="https://public.files.download.flockmail.com/10828339/2641713499345920_1" alt="" />
        </div>

        <div className="about-text">
          <h3>Our Founder</h3>
          <p>Imasgate Foundation is a nonprofit organization dedicated to supporting persons living with disabilities and the families who care for them. We provide care, skills, advocacy, and encouragement so no one is left invisible or alone. <br />
        <br />

        We believe disability is not the problem — neglect and exclusion are. That’s why we focus on practical support that restores dignity, builds confidence, and creates real opportunities.</p>
        </div>
      </div>

      <div className="mission-vision">
        <div className="statement">
          <h4>Our Mission</h4>
          <p>To support persons living with disabilities through care, education, skills development, and advocacy — helping them live independent, meaningful, and dignified lives.</p>
        </div>

        <div className="statement">
          <h4>Our Vision</h4>
          <p>A society where persons living with disabilities are accepted, supported, and included — not hidden, ignored, or excluded.</p>
        </div>


      </div>
    </section>
    
    
    </>
  )
}

export default About