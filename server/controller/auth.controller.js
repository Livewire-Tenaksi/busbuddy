let bcrypt = require("bcrypt");
const logindata = require("../model/login.model");
const signupdata = require("../model/signup.model");
let jwt = require("jsonwebtoken");
const generatetoken = require("../lib/generatetoken");

module.exports = {

    signup : async (req,res)=>{

        try{

            let {username,email,password} = req.body

        let hashedpassword = await bcrypt.hash(password,10);

        let exist = await signupdata.findOne({email:email});

        if (exist) {
            
            return res.json({
                status:false,
                "msg":"User Already Exist"
            })

        }
        else{

            signupdata.create({username:username,email:email,password:hashedpassword})
            .then(()=>{
                return res.json({
                    status:true,
                    "msg":"Account Created Please LogIn to continue"
                })
            })
            .catch(()=>{
                return res.json({
                    status:false,
                    "msg":"Error to signup"
                })
            })
        }

        }
        catch(e){

            console.log("Error occured in Auth Controller");
            res.send("Error Occured in auth controller")
            

        }

        
        
        
    },


    login : async (req,res)=>{


        try {

            let {email,password} = req.body

        let exist = await signupdata.findOne({email:email});


        if (!exist) {
            
            return res.json({
                status:false,
                "msg":"Invalid Email"
            })
        }
         

         let verification = await bcrypt.compare(password,exist.password)


         if (verification) {

            let {username} = exist

            // wait for token generation

            let token = await generatetoken(username);

            // set JWT in HTTP-only cookie

            res.cookie("authtoken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 5 * 60 * 60 * 1000  // 5 hours

            });
            
            return res.json({
                status:true,
                "msg":"Login Successfull"
            })
         }
         else{

            return res.json({
                status:false,
                "msg":"Password Incorrect"
            })
         }
            
        } catch (error) {
            
            res.send("Error occured in login controller");
            console.log("Error in login controller");
            
        }

        

     
    },

    isAuthCheck : async (req,res)=>{
        try {

            let token = req.cookies.authtoken;

            if(!token){
                return res.json({status:false, msg: "Not Authenticated"})
            }

            let decoded = jwt.verify(token,process.env.JWTSECRETKEY);

            if(!decoded){
                return res.json({status: false, msg: "Invalid Token"})
            }

            let user = await signupdata.findOne({username:decoded.username})

            if(!user){
                return res.json({status: false, msg: "User Not Found"})
            }

            return res.json({
                status: true,
                user: {username: user.username, email: user.email}
            });
            
        } 
        catch (error) {

            console.error("Auth Check Error:",error);
            res.status(500).json({status: false, msg: "Server Error"})
            
        }
    },

    logout : (req, res)=>{
        res.clearCookie("authtoken");
        res.json({ status: true, msg: "Logged Out Successfully" });
    }
}


