import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const AdPage = () => {
  const [apiData, setApiData] = useState([]);

  const fetchApiData = async () => {
    const { data } = await axios.get(
      "https://real-estate-listingsapi.onrender.com/api/properties/"
    );
    const apiData = data;
    setApiData(apiData);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <section>
      <div className="card-container">
        {apiData.map(({ id, title ,description, location }) => (
          <p key={id}>
            <Card
              body={location}
              title={title}
              subtitle={description}
              image="https://source.unsplash.com/random"
              indicator=""
              btn={{
                text: "buy",
                href: "#",
                type: "primary",
                filled: false,
                icon: <PaperAirplaneIcon />,
              }}
            />
          </p>
        ))}
      </div>
    </section>
  );
};

export default AdPage;
