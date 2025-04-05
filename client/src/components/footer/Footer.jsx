import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../Style.css"; // Ensure styles match your design

const Footer = () => {
  return (
    <div className="bg-black text-light">
      <div className="container pt-4">
        <div className="row footersec">
          <div className="col-md-3 ">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link">About Us</Link></li>              
              <li><Link to="/terms" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3 ">
          <h5 >Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
              
            </ul>
          </div>
          <div className="col-md-3 ">
            <h5 >Support</h5>
            <ul className="list-unstyled">
                <li><Link to="/support" className="footer-link">Contact</Link></li>
               
            </ul>
          </div>
          <div className="col-md-3 ">
          <h5 style={{ color: "white" }}>Follow Us</h5>
            <div className="social-icons">
              <ul className="list-unstyled">
                <li><Link to={'/'} className="social-link"><FaFacebook size={24} /></Link></li>
                <li><Link to={'/'} className="social-link"><FaTwitter size={24} /></Link></li>
                <li><Link to={'/'} className="social-link"><FaInstagram size={24} /></Link></li>
                <li><Link to={'/'} className="social-link"><FaYoutube size={24} /></Link></li>
             </ul>
             </div>
          </div>
{/* Bottom Footer */}
          <hr style={{ borderColor: "#BF2EF0" }} />
          <p className="text-center" style={{color:"#BF2EF0"}}>© {new Date().getFullYear()} BusBuddy. All Rights Reserved.</p>
        </div>
        
       
      </div>
      
    </div>
    // <footer style={{ background: "#000", color: "#BF2EF0", padding: "0px 0" }}>
    //   <div className="container ps-5 ps-md-3 ps-lg-5">
    //     {/* Top Footer Links */}
    //     <div className="row ps-5 ps-md-2 ps-lg-5">
    //       <div className="col-md-3">
    //         <h5 style={{ color: "white" }}>Company</h5>
    //         <ul className="list-unstyled"  >
    //           <li><Link to="/about" className="footer-link">About Us</Link></li>
    //           <li><Link to="/contact" className="footer-link">Contact</Link></li>
    //           <li><Link to="/careers" className="footer-link">Careers</Link></li>
    //           <li><Link to="/blog" className="footer-link">Blog</Link></li>
    //         </ul>
    //       </div>

    //       <div className="col-md-3">
    //         <h5 style={{ color: "white" }}>Quick Links</h5>
    //         <ul className="list-unstyled">
    //           <li><Link to="/faq" className="footer-link">FAQs</Link></li>
    //           <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
    //           <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
    //           <li><Link to="/refund" className="footer-link">Refund Policy</Link></li>
    //         </ul>
    //       </div>

    //       <div className="col-md-3">
    //         <h5 style={{ color: "white" }}>Support</h5>
    //         <ul className="list-unstyled">
    //           <li><Link to="/support" className="footer-link">Help Center</Link></li>
    //           <li><Link to="/booking" className="footer-link">Manage Booking</Link></li>
    //           <li><Link to="/cancellation" className="footer-link">Cancellation</Link></li>
    //           <li><Link to="/offers" className="footer-link">Offers & Discounts</Link></li>
    //         </ul>
    //       </div>

    //       <div className="col-md-3">
    //         <h5 style={{ color: "white" }}>Follow Us</h5>
    //         <div className="social-icons">
    //           <ul className="list-unstyled">
    //             <li><Link to={'/'} className="social-link"><FaFacebook size={24} /></Link></li>
    //             <li><Link to={'/'} className="social-link"><FaTwitter size={24} /></Link></li>
    //             <li><Link to={'/'} className="social-link"><FaInstagram size={24} /></Link></li>
    //             <li><Link to={'/'} className="social-link"><FaYoutube size={24} /></Link></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
      
    //   </div>

    //    {/* Bottom Footer */}
    //    <hr style={{ borderColor: "#BF2EF0" }} />
    //    <p className="text-center">© {new Date().getFullYear()} BusBuddy. All Rights Reserved.</p>
    // </footer>
  );
};

export default Footer;
