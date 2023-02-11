import React from "react";
// import feedContext from "../context/feedContext";
import Post from "../components/post/post";
import Share from "../components/post/Share";
import "./Feed.css";
import { Posts } from "../dummyData";
import Navbar from "../components/UI/Navbar";
// import { useNavigate } from "react-router-dom";
// import WithAuth from "./WithAuth";
function Feed() {
  // let navigate = useNavigate();
  // // const {showAlert}=props;
  // // const context = useContext(feedContext);
  // // const { feeds, getFeeds } = context;
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     console.log("kaam korise");
  //   // getFeeds();
  //   } else {
  //     navigate("/login");
  //   }
  //   //eslint-disable-next-line
  // }, []);

  // const ref=useRef(null);
  // const refClose=useRef(null);
  // const [note, setNote] = useState({ etitle: "", edescription: "", etag: "default" });
  // const handleClick = (e) => {
  //     console.log("updating the note",note)
  //     // e.preventDefault();
  //     editNote(note.id,note.etitle,note.edescription,note.etag);

  //     refClose.current.click();

  // }

  // const onChange = (e) => {
  //     setNote({ ...note, [e.target.name]: e.target.value })
  //     console.log("change");
  // }
  // const updateNote=(currentNote)=>{
  //     ref.current.click();
  //     setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  //     props.showAlert("Updated Successfully","success");
  // }

  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
