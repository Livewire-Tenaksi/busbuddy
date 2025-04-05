let mongoose = require("mongoose");

let book = new mongoose.Schema({

    "passengerName":{
        type:String
    },

    "email":{
        type:String
    },

    "mobileNumber":{
        type:Number
    },

    "alternatemobile":{
        type:Number
    },

    "selectedseats":{
        type:[]
    }

})

let bookingDetail = mongoose.model("BookingDetail",book);

module.exports = bookingDetail;