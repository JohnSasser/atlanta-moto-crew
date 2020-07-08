import React, { useState, useCallback, useEffect } from "react";
import ImageContainer from "../../components/ImageContainer";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import axios from "axios";
import "./style.css";

const PhotoGallery = (props) => {
  const [galleryImages, setGalleryImages] = useState([{}]);

  useEffect(() => {
    // console.log("inside useEffect() - gallery.js");
    const CLOUDINARY_URL =
      "https://res.cloudinary.com/di0f6kaus/image/list/2sTM.json";

    axios
      .get(CLOUDINARY_URL)
      .then((res) => {
        let imageList = res.data.resources;
        // console.log("imageList:", imageList);

        for (let i = 0; i < imageList.length; i++) {
          let imgObject = {
            public_id: imageList[i].public_id,
            // width: 300,
            // height: 150,
            // src: "",
          };
          // Setting the array of publicId's for CloudinaryContext Images;
          setGalleryImages((galleryImages) => [...galleryImages, imgObject]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("imagePublicIds", galleryImages);

  const images = galleryImages.map((image) => {
    return <Image publicId={image.public_id} height={195} width={300} />;
  });

  return (
    <div>
      <CloudinaryContext cloudName="di0f6kaus">
        {/* <ImageContainer> */}
        <div className="image"> {images} </div>
        {/* <Image publicId="sample" width="0.5" /> */}
        {/* </ImageContainer> */}
      </CloudinaryContext>
    </div>
  );
};

export default PhotoGallery;
