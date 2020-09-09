import React, { useState, useEffect } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
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

  // console.log("imagePublicIds", galleryImages);

  return (
    <div className="container">
      
      {/* <div className="clearfix"> */}
        {/* ***** BUILD A JUMBOTRON COMPONENT FOR THE TITLE HEADER */}
        <h1> Two Stroke Time Machine 2019</h1>
        <div className="gallery">
          <CloudinaryContext cloudName="di0f6kaus">
            {galleryImages.map((data) => {
              // console.log("data in the galleryImages.map", data)
              if (data.public_id) {
                return (
                  <div
                    className="responsive row justify-content-around"
                    key={data.public_id}
                  >
                    <div
                      className="img d-inline-flex"
                      style={{ marginBottom: "80px" }}
                    >
                      <a
                        target="_blank"
                        href={`https://res.cloudinary.com/di0f6kaus/image/upload/${data.public_id}.jpg`}
                      >
                        <Image publicId={data.public_id}>
                          <Transformation
                            crop="scale"
                            width="300"
                            height="200"
                            dpr="auto"
                            responsive_placeholder="blank"
                          />
                        </Image>
                      </a>
                    </div>
                  </div>
                );
              }
            })}
          </CloudinaryContext>
        </div>
      {/* </div> */}
    </div>
  );
};

export default PhotoGallery;
