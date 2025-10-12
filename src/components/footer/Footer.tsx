import { NavLink } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  const handleDownloadRulebook = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/rulebook.pdf';
    link.download = 'GC_Rulebook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo and Description */}
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img src="/assets/gclogo.png" alt="GC Logo" />
              <div>
                <h3>SHAURYA</h3>
                <span>The Sports Committee</span>
              </div>
            </div>
            <p className="footer-description">
              Global Championship - Where athletes showcase skill, passion, and glory. 
              Join us for an unforgettable journey of sportsmanship and victory.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="social-icon">📘</i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="social-icon">📷</i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="social-icon">🐦</i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="social-icon">📹</i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/sports">Sports</NavLink></li>
              <li><NavLink to="/rank">Overall Rank</NavLink></li>
              <li><NavLink to="/players">Best Players</NavLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><button onClick={handleDownloadRulebook}>Rulebook</button></li>
              <li><a href="/assets/pdfs/general-championship.pdf" download>Championship Info</a></li>
              <li><NavLink to="/schedule">Schedule</NavLink></li>
              <li><NavLink to="/results">Results</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:info@gc.com">info@gc.com</a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+1234567890">+123 456 7890</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Sports Complex</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Global Championship. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}