import React, { useState } from "react";
import styles from "./component_css/ImageSlider.module.css";
import { ImageSliderProps } from "../types";
import { Image } from "@nextui-org/react";

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  let imgurl: any = images.map(({ photos }: any) => photos);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.imageslidercontainer}>
      <Image style={{height:200, width:300}}
        width={300}
        height={200}
        alt={`Image ${currentIndex + 1}`}
        src={imgurl[currentIndex]}
      />
      <div className={styles.dotscontainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? styles.dotactive : styles.dot}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <div className={styles.sides}>
        <div onClick={prevSlide}>{String.fromCharCode(8592)}</div>
        <div onClick={nextSlide}>{String.fromCharCode(8594)}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
