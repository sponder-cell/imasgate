import React from 'react'
import "./Programs.css"

function Programs() {
  return (
    <>

    <section id="hero">
      <h1>Our Programs</h1>
      <p>Four pillars of impact driving our work.</p>
    </section>

    <section id="programs">

      <div className="care  program">

      <div className="care-img">
        <img src="https://public.files.download.flockmail.com/10828339/2641426737927168_1" alt="" />
      </div>

      <div className="care-intro program-intro">
        <h3>Care And Support</h3>
        <h4>Compassion in Action, Support That Transforms Lives</h4>
        <p>At Imasgate Foundation, our Care & Support Program is dedicated to improving the quality of life for vulnerable individuals and families facing hardship. We believe that everyone deserves dignity, compassion, and access to basic support during difficult times.
          <br />
          <br />
        Through this program, we provide immediate relief and long-term support to those most in need, helping them regain stability, hope, and confidence for a better future.</p>
      </div>

      </div>

      <div className="education  program">
        <div className="education-intro program-intro">
          <h3>Education & Skills</h3>
          <h4>Empowering Minds. Building Futures.</h4>
          <p>At Imasgate Foundation, our Education & Skills Program is focused on equipping individuals with the knowledge and practical skills they need to break the cycle of poverty and build sustainable livelihoods.
            <br />
            <br />

          We believe education is more than learning — it is a powerful tool for empowerment, independence, and long-term community development.</p>
        </div>
              <div className="care-img education-img">
        <img src="https://public.files.download.flockmail.com/10828339/2641426737927168_1" alt="" />
      </div>

      </div>

            <div className="advocacy  program">

              <div className="care-img">
        <img src="https://public.files.download.flockmail.com/10828339/2641426737927168_1" alt="" />
      </div>

              <div className="advocacy-intro program-intro">
          <h3>Advocacy & Awareness</h3>
          <h4>Giving Voices to the Unheard</h4>
          <p>At Imasgate Foundation, our Advocacy & Awareness Program is dedicated to challenging stigma, raising awareness, and promoting the rights of persons living with disabilities. We believe that true inclusion begins with understanding, respect, and action.
            <br />
            <br />

          By speaking up for those whose voices are often ignored, we create communities where everyone is seen, heard, and valued.</p>
        </div>


      </div>

    </section>
    
    
    </>
  )
}

export default Programs