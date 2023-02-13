import React, { useEffect, useState} from "react";
// import feedContext from "../context/feedContext";
import Post from "../components/post/post";
import Share from "../components/post/Share";
import "./Feed.css";
// import { Posts } from "../dummyData";
import Navbar from "../components/UI/Navbar";
// import { useNavigate } from "react-router-dom";
// import feedContext from "../context/feedContext";
// import WithAuth from "./WithAuth";
function Feed() {
  // let navigate = useNavigate();
  // const {showAlert}=props;
  // const context = useContext(feedContext);
  // // const { feeds, getFeeds } = context;
  // const { feeds, getFeeds } = context;
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     // navigate("/login");
  //     // console.log("kaam korise");
  //     getFeeds();
  //   } else {
  //     navigate("/login");
  //   }
  //   //eslint-disable-next-line
  // }, []);

  const host = "http://localhost:5000";
  const feedsInitial = [];
  const [feeds, setFeeds] = useState(feedsInitial);
  const getFeeds = async () => {
    //API call
    const response = await fetch(`${host}/api/feed/fetchallfeeds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //   "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkNjZlZjA2NTYyN2Y2NmFlOTM3MGIzIn0sImlhdCI6MTY1ODIyMDM2OX0.fyV7JLu980KmYlYwQi3YiveaAif1zQxhRxH0DEwJDuA"
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setFeeds(json);
  };

  console.log("hello");

  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {feeds.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>

      {/* <div>
        {feeds.map((feed) => (
          <p>{feed.description}</p>
        ))}
      </div> */}
    </>
  );
}

export default Feed;
