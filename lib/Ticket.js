var nodemailer = require('nodemailer');


async function Ticket(ticketdata,bus) {

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();


    let mailstructure = `
    <body style="font-family: Arial, sans-serif; text-align: center;  margin: 0; padding: 0;">
    <div style="max-width: 500px; margin: 20px auto; background: #ffffff; border: 1px solid rgb(158, 158, 158); padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
        <div style="background: #BF2EF0; color: white; padding: 15px; border-radius: 10px 10px 0 0;">
            <h2>Booking Confirmed 🎉</h2>
        </div>
        
        <div style="padding: 20px; text-align: left;">
            <p>Dear Customer,</p>
            <p>Your bus booking has been confirmed successfully. This is your confirmed Ticket, Happy Journey!</p>
            <p><strong>Booking ID : </strong> ${bus._id} </p>
            <p><strong>Passenger Name : </strong> ${capitalize(ticketdata.passengerName)} </p>
            <p><strong>Bus Name : </strong> ${bus.travelsname} </p>
            <p><strong>Date:</strong> ${bus.date}</p>
            <p><strong>Departure Time:</strong> ${bus.starttime} </p>
            <p><strong>Seat Number : </strong> ${ticketdata.selectedseats} </p>
            <p><strong>Departure : </strong> ${capitalize(bus.from)} </p>
            <p><strong>Arrival : </strong> ${capitalize(bus.to)} </p>
            <p><strong>Bus Operator Name:</strong> ${bus.drivername}</p>
            <p><strong>Bus Operator Number:</strong> ${bus.drivernumber}</p>

        <div>
        <p style="color: red; text-align: center;">This is your ticket. You must show this to travel</p>
        </div>
            
        </div>
        
        <div style="margin-top: 20px; font-size: 12px; color: gray;">
            <p>Thank you for choosing our service. Have a safe journey!</p>
            <p>&copy; 2025 BusBuddy </p>
        </div>
    </div>
</body>
    `

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jothikaesakki@gmail.com',
            pass: 'jgqv kjyg btlr wtfo'
        }
      });
      
      var mailOptions = {
        from: 'jothikaesakki@gmail.com',
        to: ticketdata.email,
        subject: 'Booking Confirmation',
        html: mailstructure
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
}

module.exports = Ticket;

