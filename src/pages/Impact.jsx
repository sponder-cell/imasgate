import React from 'react'
import { Link } from 'react-router';
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa";
import "./Impact.css";


function Impact() {
  return (
    <>

    <section id='impact'>
      <div className="impact-icon">
<HiMiniWrenchScrewdriver className='screw-driver'/>
      </div>

      <div className="impact-text">
        <h3>Coming Soon</h3>
        <h4>We are documenting our impact.</h4>
        <p>Our team is currently compiling detailed case studies, timelines, and success stories from our ongoing initiatives across Nigeria. This page will be updated shortly with comprehensive project data.

        </p>

        <button className='return'>
          <Link to="./">         
           <span className="arrow-div">
            <FaArrowLeft className='arrow' />
          </span>

          Return to Home
</Link>
          </button>
      </div>
    </section>
    
    
    </>
  )
}

export default Impact