const cors = require("cors");
let express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser")
// const mongoose = require("mongoose");
const logger = require('morgan');

// api routes
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3002;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // 'using prod setting static to client/build';
} else {
  // 'using dev setting static to public';
  app.use(express.static(path.join(__dirname, "public")));
}

// app.use(
//   cors({
//     origin: ["http://localhost:8080"],
//     credentials: true,
//   })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API ROUTES FOR REQUESTS
app.use(apiRoutes)

// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodDB://localhost/atlantamotocrewdb",

// );
app.listen(PORT, function () {
  // console.log(`🌎 ==> API server now on port ${PORT}!`);
});
