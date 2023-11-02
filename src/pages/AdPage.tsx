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
        {apiData.map(({ id, body, title, description, location, photos, owner_username, price }) => (
          <div key={id}>
            <Card
              body={body}
              title={title}
              subtitle={description}
              location={location}
              image={photos}
              indicator=""
              owner={owner_username}
              price={price}
            />
          </div>
        ))}
      </div>
    </section>
    </body>
  );
};

export default AdPage;
