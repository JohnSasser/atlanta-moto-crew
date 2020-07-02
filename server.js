const cors = require("cors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// api routes
const apiRoutes = require("./routes/apiRoutes");
const { request } = require("http");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // 'using prod setting static to client/build';
} else {
  // 'using dev setting static to public';
  app.use(express.static(path.join(__dirname, "public")));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
// {
//   origin: ["http://localhost:3000"],
//   credentials: true,
// }
const BASE_URL = 'https://api.cloudinary.com/v1_1/di0f6kaus/resources/image'


// CUSTOM PROXY ROUTE FOR HEADERS - CORS WAS NOT WORKING;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/gallery/images', (req, res) => {
  request(
    { url: BASE_URL },
    (error, response, body) => {
      if (error || response.status !== 200) {
        return res.status(500).json({
          type: error,
          message: error.message
        });
      }
      console.log(req);
      res.json(JSON.parse(body));
    }
  )
});

setImagePublicIDs(imagePublicIDs => [...imagePublicIDs, public_id])
// API ROUTES FOR REQUESTS
// app.use(apiRoutes);

// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodDB://localhost/atlantamotocrewdb",
//   { useNewUrlParser: true }
// );

app.listen(PORT, function () {
  // console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});
