const router = require("express").Router();
const axios = require("axios");

let keySecret = "kt9_w2gROmkumJEN6bBtk9no82c";

router.get("/api/gallery/images", (req, res, next) => {
    // res.send({message: "howdy, you in the /api/gallery/images route!"})
    let cloudinaryUrl = `https://884465835774119:${keySecret}@api.cloudinary.com/v1_1/di0f6kaus//resources/image/tags/2sTM`;
    // let demo = `https://api.github.com/users/JohnSasser`
    axios({
      url: cloudinaryUrl,
      method: 'GET',
  
    })
      .catch((err) => console.log(err));
});

router.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello john!` }));
});

module.exports = router;


// cloudinary.v2.search
// .expression('resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m')
// .sort_by('public_id','desc')
// .max_results(50)
// .execute().then(result=>console.log(result));


  // console.log('in the api/gallery GET ROUTE:')

  let cloudinaryUrl = `https://884465835774119:kt9_w2gROmkumJEN6bBtk9no82c@api.cloudinary.com/v1_1/di0f6kaus/resources/image/`;
  // let demo = `https://api.github.com/users/JohnSasser`
  // axios({
  //   url: cloudinary,
  //   method: 'GET',

  // })
  //   .catch((err) => console.log(err));