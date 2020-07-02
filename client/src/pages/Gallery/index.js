import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import axios from "axios";
import { photos } from "./photos";

const PhotoGallery = (props) => {
  const [imagePublicIDs, setImagePublicIDs] = useState([{}]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          let public_id = imageList[i].public_id;
          // Setting the array of publicId's for CloudinaryContext Images;
          setImagePublicIDs((imagePublicIDs) => [
            {
              ...imagePublicIDs,
              public_id: public_id,
              width: 8,
              height: 6,
              src: "",
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(imagePublicIDs);

  return (
    <div>
      <CloudinaryContext cloudName="di0f6kaus">
        {/* <div>
          <Image publicId="amc-gallary/ronnie2_a0sogs" width="400" />
        </div>
        <div>
          <Image publicId="amc-gallary/ronnie_mfwl7i" width="400" />
        </div>
        <Image publicId="sample" width="0.5" /> */}

        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </CloudinaryContext>
    </div>
  );
};

export default PhotoGallery;
