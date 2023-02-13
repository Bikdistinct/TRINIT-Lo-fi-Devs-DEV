// import React, { useEffect, useContext } from "react";

// import "./Feed.css";

// import Navbar from "../components/UI/Navbar";

// import FeedContext from "../context/FeedContext";

// function Feed() {
//   const { feeds } = useContext(FeedContext);
//   //   const { feeds } = context;

//   //   useEffect(() => {
//   //     getFeeds();
//   //   }, []);
//   console.log("hello");

//   return (
//     <>
//       <Navbar />
//       <div>
//         {feeds.map((feed) => (
//           <p>{feed.description}</p>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Feed;
import React, { useEffect, useContext } from "react";

import "./Feed.css";

import Navbar from "../components/UI/Navbar";

import FeedContext from "../context/FeedContext";

function Feed() {
  const { feeds } = useContext(FeedContext);

  return (
    <>
      <Navbar />
      <div>
        {feeds.map((feed) => (
          <p>{feed.description}</p>
        ))}
      </div>
    </>
  );
}

export default Feed;
