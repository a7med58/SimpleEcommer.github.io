import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flogo from "../../Assets/Eagle.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={flogo} alt="logo" className="flogo" />
            <p>Eagel Store For Egyption Products</p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhoneFlip} />
              </div>
              <div className="footer-text">
                <h6>Contct Us</h6>
                <h4>01123919198</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quik Link</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="/store">Store</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form className="form-footer">
              <input type="email" placeholder="Enter Youer E-Mail" />
              <button id="btnfooter">Subscrib</button>
            </form>
            <div className="social">
              <FontAwesomeIcon size="3x" icon={faFacebook} color="#fff" />
              <FontAwesomeIcon size="3x" icon={faLinkedinIn} color="#fff" />
              <FontAwesomeIcon size="3x" icon={faInstagram} color="#fff" />
              <FontAwesomeIcon size="3x" icon={faGithub} color="#fff" />
              <FontAwesomeIcon size="3x" icon={faTwitter} color="#fff" />
            </div>
          </div>
          <div className="footer-buttom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <span>&copy; Copyright 2023 Eagle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
