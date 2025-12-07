import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">

      {/* Top Section */}
      <div className="footer-content">

        {/* About */}
        <div className="footer-box">
          <h2 className="footer-logo">📚 BookStore</h2>
          <p className="footer-text">
            Your place to discover new worlds, ideas, and stories.
            We bring you books for every taste and passion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/books">Browse Books</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-box">
          <h3 className="footer-title">Customer Service</h3>
          <ul>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-box">
          <h3 className="footer-title">Connect</h3>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={20} />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={20} />
            </a>

            <a href="mailto:hello@bookstore.com">
              <Mail size={20} />
            </a>
          </div>

          <p className="footer-email">Haven@bookstore.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {year} BookStore. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;