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
    <div>
      <div className={styles.imageslidercontainer}>
        <div className={styles.sides}>
          <button onClick={prevSlide}>❰</button>
        </div>
        <Image style={{width:"300px", height:"200px"}}
          alt={`Image ${currentIndex + 1}`}
          src={imgurl[currentIndex]}
        />
        <div className={styles.sides}>
          <button onClick={nextSlide}>❱</button>
        </div>
      </div>

      <div className={styles.dotscontainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? styles.dotactive : styles.dot}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
