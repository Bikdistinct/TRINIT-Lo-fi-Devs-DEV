import Post from "../components/post/post";
import Share from "../components/post/Share";
import "./Feed.css";
import { Posts } from "../dummyData";
import Navbar from '../components/UI/Navbar';

export default function Feed() {
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