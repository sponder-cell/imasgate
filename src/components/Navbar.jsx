import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./Navbar.css";

function Navbar() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [openInvolved, setOpenInvolved] = useState(false);

  const navRef = useRef(null);

  const showNav = () => {
    navRef.current.classList.toggle('responsive')
  }

    const closeNav = () => {
    navRef.current.classList.remove('responsive')
  }




  return (
    <nav className="navbar">
      <Link to="/" ><img className="logo" src="logo.png" alt="" /></Link>

      <ul ref={navRef} className="nav-links">
        <li><Link onClick={closeNav} to="/">Home</Link></li>

        <li><Link onClick={closeNav} to="/about">About Us</Link></li>

        <li><Link onClick={closeNav} to="/Programs">Programs</Link></li>

        <li><Link onClick={closeNav} to="/impact">Projects</Link></li>

        <li><Link onClick={closeNav}  to="/Volunteer">Get Involved</Link></li>



     </ul>
      <button className="donate">
      Donate
      <span className="arrow-div">
        <FaArrowRight className="arrow" />
      </span>
    </button>     


    < CiMenuFries onClick={showNav} className="menu" />
    </nav>
  );
}

export default Navbar;
