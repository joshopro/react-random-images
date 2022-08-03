import React from "react";
import Slider from "react-slick";
import DogImage from "../Image";

const slickSettings = {
  infinite: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 2000,
};

const ListDogImages = ({ images = [], onSelect }) => (
  <div className="slider">
    <Slider {...slickSettings}>
      {images.length != 0
        ? images?.map((v, i) => (
          <DogImage width={230} height={200} src={v.image} breed={v.breed} key={i} onClick={() => onSelect(v)} />
        ))
        : ""}
    </Slider>
  </div>
);

export default ListDogImages;
