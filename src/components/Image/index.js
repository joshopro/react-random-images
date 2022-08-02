import React from "react";
import Image from "next/image";
import Link from "next/link";

const DogImage = ({ src, width = 500, height = 500 }) => {
  return (
    <Link href={src}>
      <a target="_blank">
        <Image
          className="dog-image"
          src={src}
          alt="Dog Image"
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};
export default DogImage;
