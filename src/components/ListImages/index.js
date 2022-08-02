import React from "react";
import DogImage from "../Image";
import Slider from "react-slick";
const ListDogImages = ({ images = [] }) => {
  const slickSettings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider">
      <Slider {...slickSettings}>
        {images.length != 0
          ? images?.map((v, i) => (
              <DogImage width={230} height={200} src={v} key={i} />
            ))
          : ""}
      </Slider>
    </div>
  );
};
export default ListDogImages;
