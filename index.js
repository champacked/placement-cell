const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./config/mongoose");
require("dotenv").config({
  path: ".env",
});

const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");

//using the body

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// seting up layouts
app.use(expressLayouts);

//extract all styles and scripts from layout

app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

//setup for view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

//  for listening to server whether our server has been connected or not
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server in the port :", port);
  }
  console.log("server is running on the port", port);
});
