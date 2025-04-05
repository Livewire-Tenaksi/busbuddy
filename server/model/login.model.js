let mongoose = require("mongoose");

let loginschema = new mongoose.Schema({

    "email":{
        type:String
    },
    "password":{
        type:String
    }

})

let logindata = mongoose.model("Logindata",loginschema);

module.exports = logindata;