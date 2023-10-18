"use client";

import React from "react";

export default function ImagesComponent(props) {
  const selectedStyles = {
    scale: "1.15",
    boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.678)",
  };
  const deselectedStyles = {
    scale: "1",
    baxShadow: "none",
  };
  let [mainImage, setMainImage] = React.useState(props.displayImage);
  let [imageStyle, setImageStyle] = React.useState({
    image1: selectedStyles,
    image2: deselectedStyles,
    image3: deselectedStyles,
  });

  function imageClicked(e) {
    let Image = e.target.style.backgroundImage;
    let length = Image.length;
    Image = Image.slice(5, length - 2);
    setMainImage(Image);
    setImageStyle({
      image1: deselectedStyles,
      image2: deselectedStyles,
      image3: deselectedStyles,
      [e.target.className.split(" ")[0]]: selectedStyles,
    });
  }
  return (
    <div className="images-container-product">
      <div
        className="main-image-container-product"
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
      ></div>
      <div className="other-images-container-product">
        <div
          name="image1"
          className="image1 first-image-product common-image-container-product"
          onClick={imageClicked}
          style={{
            backgroundImage: `url(${props.image1})`,
            ...imageStyle.image1,
          }}
        ></div>
        <div
          name="image2"
          className="image2 second-image-product common-image-container-product"
          onClick={imageClicked}
          style={{
            backgroundImage: `url(${props.image2})`,
            ...imageStyle.image2,
          }}
        ></div>
        <div
          name="image3"
          className="image3 third-image-product common-image-container-product"
          onClick={imageClicked}
          style={{
            backgroundImage: `url(${props.image3})`,
            ...imageStyle.image3,
          }}
        ></div>
      </div>
    </div>
  );
}
