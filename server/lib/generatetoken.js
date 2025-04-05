let jwt = require("jsonwebtoken");

let generatetoken = async (user)=>{

    let authtoken = await jwt.sign({"username":user},process.env.JWTSECRETKEY,{expiresIn:"5h"});

    return authtoken

}

module.exports = generatetoken;