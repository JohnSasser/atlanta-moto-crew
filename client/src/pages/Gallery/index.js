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
    console.log("inside useEffect() - gallery.js");
    // const response = axios.get("/api/gallery/images");
    // console.log(response)

    axios.get('https://884465835774119:kt9_w2gROmkumJEN6bBtk9no82c@api.cloudinary.com/v1_1/di0f6kaus/resources/image/')
      .then((res) => {
        console.log("in the gallery fetch request");
        console.log(res.body);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <CloudinaryContext cloudName="di0f6kaus">
        <div>
          <Image publicId="" width="50" />
        </div>
        <Image publicId="sample" width="0.5" />
      </CloudinaryContext> */}
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
    </div>
  );
};

export default PhotoGallery;
