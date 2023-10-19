import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const AdPage = () => {
  const [apiData, setApiData] = useState([] as any[]);

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
    <body id="ad-page">
    <section>
      <div className="card-container">
        {apiData.map(({ id, title, description, location, photos }) => (
          <div key={id}>
            <Card
              body={location}
              title={title}
              subtitle={description}
              image={photos}
              indicator=""
              btn={{
                text: "Details",
                href: "#",
                type: "primary",
                filled: false,
                icon: <BuildingOfficeIcon />,
              }}
            />
          </div>
        ))}
      </div>
    </section>
    </body>
  );
};

export default AdPage;
