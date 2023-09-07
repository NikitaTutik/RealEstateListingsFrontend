import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const realEstateData = () => {
    axios.get("https://real-estate-listingsapi.onrender.com/api/properties/")
    .then(data => console.log(data.data))
    .catch(error => console.log(error))
  };

  realEstateData();

  return (
    <section className="card-container">
      <div>
        <Card
          body="Stavropol, Russia"
          title="Cool apps"
          subtitle="50sqft 2rooms"
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
      </div>
    </section>
  );
}

export default App;
