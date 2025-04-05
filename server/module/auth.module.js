let express = require("express");
const { signup, login, isAuthCheck, logout } = require("../controller/auth.controller");

let authrouter = express.Router()

authrouter.post("/signup",signup);

authrouter.post("/login",login);

authrouter.get("/check", isAuthCheck);

authrouter.post("/logout",logout)

module.exports = authrouter;
