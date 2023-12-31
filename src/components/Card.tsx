import { useState } from "react";
import { CardInterface } from "../types";
import ImageSlider from "./ImageSlider";
import CardDetailsModal from "./CardDetailsModal";
import { Card as Cards, CardHeader, CardBody } from "@nextui-org/react";
import styles from "./component_css/ImageGrid.module.css";

const Card = ({
  body,
  subtitle,
  title,
  image,
  location,
  owner,
  price,
}: CardInterface) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <Cards className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{location}</small>
        <h4 className="font-bold text-large">{subtitle}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {image && <ImageSlider images={image} />}
      </CardBody>

      <CardDetailsModal open={showModal} onClose={toggleModal}>
        {/* <>{image && <ImageSlider images={image} />}</> */}
        <div className={styles.row}>
          {image?.map((imageobj: any) => (
            <div className={styles.column} key={imageobj.id}>
              <img
                style={{ height: 200, width: 300 }}
                key={imageobj.id}
                src={imageobj.photos}
                alt={`Image ${imageobj.id}`}
              />
            </div>
          ))}
        </div>

        <h3>{title}</h3>
        <small>{subtitle}</small>
        <div>{body}</div>
        <div>{location}</div>
        <small className="text-default-500">Posted by: {owner}</small>
        <div>{price}$</div>
      </CardDetailsModal>
    </Cards>
  );
};

export default Card;
