import React, { useState } from "react";
import Layout from "@theme/Layout";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Dynamically load all images from the /img folder in the static directory
const importAll = (r) =>
  r.keys().map((item) => {
    return {
      src: r(item).default,
      // extract width and height from the filename as date-width-height-name.jpg
      width: parseInt(item.split("-")[1]),
      height: parseInt(item.split("-")[2]),
      name: item.split("/")[1],
    };
  });

const imageData = importAll(
  // eslint-disable-next-line no-undef
  require.context("../../assets/art", false, /\.(png|jpe?g|svg)$/),
);

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <Layout title="Gallery" description="My art gallery">
      <RowsPhotoAlbum
        photos={imageData}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={imageData}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Layout>
  );
}
