const router = require("express").Router();
const axios = require("axios");

router.get("/api/gallery/images", (req, res, next) => {
console.log('in the api/gallery GET ROUTE:')

  let keySecret = "kt9_w2gROmkumJEN6bBtk9no82c";
  let cloudinaryUrl = `https://884465835774119:${keySecret}@api.cloudinary.com/v1_1/di0f6kaus/resources/image`;
  
  https://884465835774119:${keySecret}@api.cloudinary.com/v1_1/di0f6kaus
  axios
    .get(cloudinaryUrl)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
