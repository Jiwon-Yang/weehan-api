const express = require("express");
const path = require("path");
const db = require("./db.js");
const route = require("./route.js");

const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "html"));

app.use(
    session({ secret: "비밀코드", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
db();
passportConfig();
app.use(express.static(path.join(__dirname, "html")));
app.use("/", route);
app.listen(8080, () => {
    console.log("Express App on port 8080!");
});
