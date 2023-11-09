import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const AdPage = () => {
  const [items, setItems] = useState([] as any);
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    const response = await axios.get(
      `https://real-estate-listingsapi.onrender.com/api/properties/?limit=12&offset=${limit}`
    );
    if (response.data.results.length > 0) {
      setItems(items.concat(response.data.results));
      setLimit(limit + 10);
    } else {
      setHasMore(false);
    }
  };

  return (
    <body id="ad-page">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <p style={{ textAlign: "center" }}>
            <small>Loading...</small>
          </p>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <small>End of the page...</small>
          </p>
        }
      >
        <section>
          <div className="card-container">
            {items.map(
              ({
                id,
                body,
                title,
                description,
                location,
                photos,
                owner_username,
                price,
              }: any) => (
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
              )
            )}
          </div>
        </section>
      </InfiniteScroll>
    </body>
  );
};

export default AdPage;
