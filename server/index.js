let express = require("express");
const Connectdb = require("./lib/db.connect");
let cors = require("cors");
let cookieparser = require("cookie-parser");
const authrouter = require("./module/auth.module");
const busrouter = require("./module/bus.module");

let app = express()

app.use(express.json())




const allowedOrigins = [
    "http://localhost:5173", // for local dev
    "https://busbuddy-peach.vercel.app" // deployed frontend
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

// Handle preflight
app.options("*", cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));











app.use(cookieparser());

Connectdb()

app.use("/auth",authrouter)

app.use("/bus",busrouter)




app.listen(4000,()=>{

    console.log("server is running at : http://localhost:4000");
    
})