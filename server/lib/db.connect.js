let DB = require("mongoose");
let dotenv = require("dotenv");

dotenv.config()

let Connectdb = ()=>{

    DB.connect(process.env.DBASE)
    .then(()=>{
        console.log("Database is connected to server");
        
    })
    .catch((e)=>{
        console.log("Error in connecting Database",e);
        
    })

}

module.exports = Connectdb