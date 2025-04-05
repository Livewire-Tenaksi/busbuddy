let mongoose = require("mongoose");

let signupschema = new mongoose.Schema({

    "username":{
        type:String
    },
    "email":{
        type:String
    },
    "password":{
        type:String
    }

})

let signupdata = mongoose.model("Signupdata",signupschema);

module.exports = signupdata;