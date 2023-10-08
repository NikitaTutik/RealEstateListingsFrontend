import { useState } from "react";
import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import styles from "./Card.module.css";
import ImageSlider from "./ImageSlider";
import CardDetailsModal from "./CardDetailsModal";

const Card = ({
  body,
  btn,
  subtitle,
  title,
  badge,
  image,
  indicator,
}: CardInterface) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <article className={`stack-sm ${styles.card}`}>
      {indicator && <small className={styles.indicator}>{indicator}</small>}

      {badge && <Badge text={badge.text} filled={badge.filled} />}

      {image && <ImageSlider images={image} />}

      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.title}>{subtitle}</small>}
      </div>

      <CardDetailsModal open={showModal} onClose={toggleModal}>
        <>{image && <ImageSlider images={image} />}</>
        <h3 className={styles.title}>{title}</h3>
        <small className={styles.title}>{subtitle}</small>
        <div className={styles.body}>{body}</div>
      </CardDetailsModal>

      <div onClick={toggleModal}>
        <Button
          filled={btn.filled}
          type={btn.type}
          text={btn.text}
          href={btn.href}
          icon={btn.icon}
        />
      </div>
    </article>
  );
};

export default Card;
