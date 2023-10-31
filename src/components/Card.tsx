import { useState } from "react";
import { CardInterface } from "../types";
import styles from "./component_css/Card.module.css";
import ImageSlider from "./ImageSlider";
import CardDetailsModal from "./CardDetailsModal";
import {
  Card as Cards,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";

const Card = ({
  body,
  subtitle,
  title,
  image,
}: CardInterface) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <Cards className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{body}</small>
        <h4 className="font-bold text-large">{subtitle}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {image && <ImageSlider images={image} />}
      </CardBody>

      <CardDetailsModal open={showModal} onClose={toggleModal}>
        <>{image && <ImageSlider images={image} />}</>
        <h3 className={styles.title}>{title}</h3>
        <small className={styles.title}>{subtitle}</small>
        <div className={styles.body}>{body}</div>
      </CardDetailsModal>
    </Cards>
  );
};

export default Card;
