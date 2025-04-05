import React from "react";
import '../App.css'

const Termsandcondition = () => {
  return (
    <div>
      <div className="container p-2 p-sm-5 abt">
        <h2 style={{ textAlign: "center",color:'#BF2EF0 '}}>Terms and Conditions</h2>

        <p>
          Welcome to BusBuddy! By accessing and using our website, you agree to
          comply with the following terms and conditions. Please read them
          carefully before proceeding with any bookings.
        </p>

        <h3>
          1.<i>General Terms</i>
        </h3>

        <p>
          By using our services, you confirm that you are at least 18 years old
          or have parental/guardian consent. <br />
          BusBuddy reserves the right to modify or update these terms at any
          time.
        </p>

        <h3>
          2.<i>Booking and Payment</i>
        </h3>

        <p>
          All bookings must be made through our website or mobile app. <br />
          Payments can be made using credit/debit cards, UPI, net banking, or
          digital wallets. <br />
          Your ticket is confirmed only after successful payment.
        </p>

        <h3>
          3.<i>Ticket Policies</i>
        </h3>

        <p>
          Passengers must carry a valid ID proof along with their ticket. <br />
          Tickets are non-transferable and cannot be exchanged for another
          person.
        </p>

        <h3>
          4.<i>Passenger Responsibilities</i>
        </h3>

        <p>
          Arrive at the boarding point at least 30 minutes before departure.{" "}
          <br />
          BusBuddy is not responsible for delays due to traffic, weather, or
          other unforeseen circumstances. <br />
          Passengers must follow the bus company's safety and luggage policies.
        </p>

        <h3>
          5.<i>Baggage Policy</i>
        </h3>

        <p>
          Passengers are allowed a limited amount of luggage as per bus operator
          guidelines. <br />
          Any valuable items should be carried at your own risk. BusBuddy is not
          responsible for lost or stolen items.
        </p>

        <h3>
          6.<i>Travel Disruptions</i>
        </h3>

        <p>BusBuddy is not liable for missed connections due to bus delays.</p>

        <h3>
          7.<i>Privacy Policy</i>
        </h3>

        <p>
          We collect personal information only for booking and service-related
          purposes. <br />
          Your data is protected as per our Privacy Policy.
        </p>

        <h3>
          8.<i>Governing Law</i>
        </h3>

        <p>
          These terms are governed by the laws of India. <br />
          Any disputes shall be resolved in the courts of TamilNadu
        </p>
      </div>
    </div>
  );
};

export default Termsandcondition;
