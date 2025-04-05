let jwt = require("jsonwebtoken");

function protectedRoute(req,res,next){

    let token = req.cookies.authtoken;
    
    

    if (!token) {

       return res.json({msg:"access denied no token provided!"});
        
    } 
   
    try {

        let decoded = jwt.verify(token,process.env.JWTSECRETKEY);
        req.user = decoded;
        
        
        next();
        
    } catch (error) {

        return req.json({msg:"invalid token"});
        
    }

}


module.exports = protectedRoute;