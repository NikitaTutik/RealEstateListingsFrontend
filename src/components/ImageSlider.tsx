import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import CardStyles from "./Card.module.css";
import { ImageSliderProps } from "../types";


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
      <img
        src={imgurl[currentIndex]}
        className={CardStyles.image}
        alt={`Image ${currentIndex + 1}`}
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
      <section className={styles.sides}>
        <div onClick={prevSlide}>{String.fromCharCode(8592)}</div>
        <div onClick={nextSlide}>{String.fromCharCode(8594)}</div>
      </section>
    </div>
  );
};

export default ImageSlider;
