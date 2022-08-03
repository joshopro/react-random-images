import React from "react";
import Image from "next/image";

const DogImage = ({ src, breed, width = 500, height = 500, onClick }) => (
  <div className="dog-image" onClick={onClick}>
    <Image
      src={src}
      alt="Dog Image"
      width={width}
      height={height}
      objectFit="cover"
      objectPosition="center"
    />
    <p>{breed}</p>
  </div>
);

export default DogImage;
