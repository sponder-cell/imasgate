import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h3>Imasgate Foundation</h3>
          <p>
            Standing with persons living with disabilities — with love, dignity,
            and hope. Together, we create inclusion, opportunity, and impact.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/impact">Impact</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/partner">Partner</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: info@imasgatefoundation.org</p>
          <p>Phone: 0803 343 3010</p>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Imasgate Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
