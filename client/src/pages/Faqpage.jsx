import React from "react";
import "../App.css"

const Faqpage = () => {
  return (
    <div >
      <div className="container abtf p-3 p-sm-4">
        <h2 style={{textAlign:"center",marginBottom:'15px', color:'#BF2EF0'}}>FAQs - BusBuddy </h2>

        <h4>
          1.<i>How do I book a bus ticket?</i>
        </h4>

        <p>
          Booking a bus ticket is easy! Simply go to the Book Ticket page, enter
          your departure and destination locations, select your preferred date
          and time, and choose a seat. Proceed with the payment to confirm your
          booking.
        </p>

        <h4>
          2.<i>Can I cancel or reschedule my booking?</i>
        </h4>

        <p>
          No, once you booked the ticket cancellation is not available.
        </p>

        <h4>
          3.<i>What payment methods are accepted?</i>
        </h4>

        <p>
          We accept a variety of payment methods, including: <br />
          Credit/Debit Cards (Visa, Mastercard) <br />
          UPI & Digital Wallets <br />
          Net Banking
        </p>

        <h4>
          4.<i>Will I receive a confirmation after booking?</i>
        </h4>

        <p>
          Yes, once your booking is confirmed, you will receive an email with
          your ticket details, including the bus operator, seat number, and
          boarding point.
        </p>

        <h4>
          5.<i> Do I need to carry a printout of my ticket?</i>
        </h4>

        <p>
          No, you can show your e-ticket (sent via email) at the boarding point.
          However, some operators might require a printout, so please check the
          terms before your journey.
        </p>

        <h4>
          6.<i>What if my bus is delayed or canceled?</i>
        </h4>

        <p>
          If your bus is delayed or canceled, you will be notified via SMS or
          email. In case of cancellations, you may be eligible for a refund or
          reschedule, depending on the operator's policy.
        </p>

        <h4>
          7.<i>How can I contact customer support?</i>
        </h4>

        <p>
          You can reach out to our support team via: <br />
          Email: support@busbuddy.com <br />
          Phone: +91-7418529632
        </p>

        <h4>
          8.<i>Is my personal and payment information safe?</i>
        </h4>

        <p>
          Yes! We use secure encryption technology to protect your personal and
          payment details. Your data is never shared with third parties.
        </p>

        <h4>
          9.<i>Can I book tickets for someone else?</i>
        </h4>

        <p>
          Yes, you can book tickets on behalf of friends or family. Just enter
          their details while booking.
        </p>

        <h4>
          10.<i>What happens if I miss my bus?</i>
        </h4>

        <p>
          If you miss your bus, you may not be eligible for a refund. However,
          some operators provide an option to rebook at a minimal charge. Check
          the operator's policy for details.
        </p>
      </div>
    </div>
  );
};

export default Faqpage;
