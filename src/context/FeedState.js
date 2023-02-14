import { useState } from "react";
import FeedContext from "./feedContext";

const FeedState = (props) => {
  const host = "http://localhost:5000";

  const feedsInitial = [];
  const [feeds, setFeeds] = useState(feedsInitial);
  const getFeeds = async () => {
    //API call
    const response = await fetch(`${host}/api/feed/fetchallfeed`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNjZlZjA2NTYyN2Y2NmFlOTM3MGIzIn0sImlhdCI6MTY1ODIyMDM2OX0.fyV7JLu980KmYlYwQi3YiveaAif1zQxhRxH0DEwJDuA"
        // "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setFeeds(json);
  };

  useEffect(() => {
    getFeeds();
  }, []);

  //add feed
  const addFeed = async (description) => {
    //todo api call
    const response = await fetch(`${host}/api/feed/addfeed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ description }),
    });

    const json = await response.json();
    console.log(json);

    console.log("add func");
    const feed = json;

    setFeeds(feeds.concat(feed));
  };

  const editFeed = async (id, description) => {
    //api call
    const response = await fetch(`${host}/api/feed/updatefeed/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ description }),
    });
    const json = response.json();
    console.log(json);
    let newFeeds = JSON.parse(JSON.stringify(feeds));
    //Logic to edit in client
    for (let index = 0; index < newFeeds.length; index++) {
      const element = newFeeds[index];
      if (element._id === id) {
        // newFeeds[index].title = title;
        newFeeds[index].description = description;
        // newFeeds[index].tag = tag;
        break;
      }
    }
    setFeeds(newFeeds);
  };

  const deleteFeed = async (id) => {
    //api call
    const response = await fetch(`${host}/api/feed/deletefeed/${id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(json);

    console.log("delted feed with id" + id);
    const newFeed = feeds.filter((feed) => {
      return feed._id !== id;
    });
    setFeeds(newFeed);
  };

  const showFeed = async (tap) => {
    const response = await fetch(`${host}/api/feed/fetchallbik/${tap}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setFeeds(json);
  };

  return (
    <FeedContext.Provider
      value={{ feeds, addFeed, editFeed, deleteFeed, getFeeds, showFeed }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedState;
