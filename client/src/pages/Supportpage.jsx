import React from "react";
import '../App.css'

const Supportpage = () => {
  return (
    <div>
      <div className="container  p-5 pb-5">
        <div className="row justify-content-center pb-5 ">
          <div className="col-sm-7 col-md-8 col-lg-6 abt  p-2 p-sm-5" style={{border:'1px solid #BF2EF0', borderRadius:'10px'}}>
            <h3>
              <i>Our Office</i>
            </h3>
            <div>
              <p style={{ textAlign: "left" }}>
                BusBuddy Headquarters <br />
                123, Main Street,
                <br />
                Chennai, TamilNadu - 600 004 <br />
                India
              </p>
            </div>

            <h3>
              <i>Customer Support</i>
            </h3>
            <div>
              <p style={{ textAlign: "left" }}>
                Toll-Free: 1800-456-5896 <br />
                Helpline Number: +91-7418529632 <br />
                WhatsApp Support: +91-9638527419
              </p>
            </div>

            <h3>
              <i>Email Us</i>
            </h3>
            <div>
              <p style={{ textAlign: "left" }}>
                For Booking Assistance: support@busbuddy.com <br />
                For General Inquiries: info@busbuddy.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supportpage;
