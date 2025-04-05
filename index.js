let express = require("express");
const Connectdb = require("./lib/db.connect");
let cors = require("cors");
let cookieparser = require("cookie-parser");
const authrouter = require("./module/auth.module");
const busrouter = require("./module/bus.module");

let app = express();

app.use(express.json());
app.use(cookieparser()); // ✅ Use before routes




const path = require("path");

// Serve static files from React app
app.use(express.static(path.join(__dirname, "client", "dist")));

// Catch-all route to serve React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});





// ✅ CORRECT CORS SETUP
const allowedOrigins = [
  "http://localhost:5173",
  "https://busbuddy-peach.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"]
};

// ✅ This applies to all requests and OPTIONS preflight
app.use(cors(corsOptions));

// ✅ Manually handle OPTIONS to ensure all headers go out (some setups still fail without this)
app.options("*", cors(corsOptions));

// ✅ Now connect DB and add routes
Connectdb();

app.use("/auth", authrouter);
app.use("/bus", busrouter);

app.listen(4000, () => {
  console.log("server is running at : http://localhost:4000");
});
