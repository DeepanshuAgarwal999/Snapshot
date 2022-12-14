import '../Css/footer.css'
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaLinkedin,FaDiscord } from "react-icons/fa";

const Footer=()=>{
    return(
   <div>
      {/* <!-- Site footer --> */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">This project is created by <i>Deepanshu Agarwal</i> (2100290130060) and <i>Aryan Srivastava</i>(2100290130042)
            under the guidance of<i>___________</i>this project is developed by using react js.
            The basic theme of this project is to provide a non copyrighted images for content creators
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="http://scanfcode.com/category/c-language/">C</Link></li>
              <li><Link to="http://scanfcode.com/category/front-end-development/">UI Design</Link></li>
              <li><Link to="http://scanfcode.com/category/back-end-development/">PHP</Link></li>
              <li><Link to="http://scanfcode.com/category/java-programming-language/">Java</Link></li>
              <li><Link to="http://scanfcode.com/category/android/">Android</Link></li>
              <li><Link to="http://scanfcode.com/category/templates/">Templates</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="http://scanfcode.com/about/">About Us</Link></li>
              <li><Link to="http://scanfcode.com/contact/">Contact Us</Link></li>
              <li><Link to="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li>
              <li><Link to="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="http://scanfcode.com/sitemap/">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Are Reserved   </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link  to="/"><i><FaFacebook/></i></Link></li>
              <li><Link to='/'><i ><FaLinkedin/></i></Link></li>
              <li><Link to='/'><i><FaTwitter/></i></Link></li>
              <li><Link to='/'><i><FaDiscord/></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
   </div>
    )
}
export default Footer;
