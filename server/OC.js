const busdetails = require("./model/bus.model");




 async function B(){

    // Array to store seat data
const seats = [];

for (let i = 1; i <= 40; i++) {
   await seats.push({ seatno: i, bookingStatus: false }); // Assuming seats start as available
}

// Create a bus document with all seats at once
 await busdetails.create({ totalseat: seats })
    .then((d) => {
        console.log("Bus details saved:", d);
    })
    .catch((e) => {
        console.error("Error saving bus details:", e);
    });



}


B();

