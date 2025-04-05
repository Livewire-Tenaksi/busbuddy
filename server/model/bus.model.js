let mongoose = require("mongoose");

let bus = new mongoose.Schema({

    "from" : {
        type:String
    },

    "to" : {
        type:String
    },
    
    "date" : {
        type:String
    },

    "startingdate" : {
        type:String
    },

    "reachingdate" : {
        type:String
    },

    "travelsname" : {
        type:String
    },

    "ownername" : {
        type:String
    },

    "ownernumber": {
        type:Number
    },

    "drivername" : {
        type:String
    },

    "drivernumber" : {
        type:Number
    },

    "starttime" : {
        type:String
    },

    "endtime" : {
        type:String
    },

    "snacks" : {
        type:Boolean
    },

    "water" : {
        type:Boolean
    },

    "blanket" : {
        type:Boolean
    },

    "tv" : {
        type:Boolean
    },

    "chargeport" : {
        type:Boolean
    },
    
    "ac" : {
        type:Boolean
    },

    "bustype" : {
        type:String
    },

    "price" : {
        type:Number
    },

    "rating" : {
        type:Number 
    },

    "seats":{
        type:[]
    }
})

let busdetails = mongoose.model("busdetails",bus);

module.exports = busdetails;