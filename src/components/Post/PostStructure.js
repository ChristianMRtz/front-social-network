import {
  Post,
  PostBody,
  Avatar,
  PostDescription,
  Images,
  PostDetails,
} from "./styles";
import { PostFooter } from "../Feed/styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

export const PostStructure = ({
  avatar,
  body,
  username,
  email,
  date,
  comments_count,
  likes_count,
  dislikes_count,
  images,
}) => {
  const [active, setActive] = useState("");
  const [activeDislike, setActiveDislike] = useState("");
  const [counterLike, setCounterLike] = useState(0);
  const [counterDislike, setCounterDislike] = useState(0);

  const parseDate = (date) => {
    const dateGMT = date.replace(/T/, " ");
    const dateFormat = new Date(dateGMT);
    return dateFormat.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handleLike = (e) => {
    e.preventDefault();
    if (e.target.id === "like") {
      setActive("active");
      setCounterLike(counterLike + 1);
    } else {
      setActive("");
      setCounterLike(counterLike - 1);
    }
  };

  const handleDislike = (e) => {
    e.preventDefault();

    if (e.target.id === "dislike") {
      setActiveDislike("active");
      setCounterDislike(counterDislike + 1);
    } else {
      setActiveDislike("");
      setCounterDislike(counterDislike - 1);
    }
  };

  return (
    <>
      <Post>
        <div className="post-avatar">
          <Avatar src={avatar} alt="user" />
        </div>
        <div className="username">
          <h3>{username}</h3>
          <h4>{email}</h4>
        </div>
      </Post>
      <PostBody>
        <div>
          <div>
            <PostDescription>
              <p>{body}</p>
            </PostDescription>
          </div>
          {images ? (
            <Images src="https://picsum.photos/1080/720" alt="post" />
          ) : (
            ""
          )}
          <PostDetails>
            <div className="date">{parseDate(date)}</div>
            <div className="counter-reactions">
              <div className="likes">
                <span>{likes_count + counterLike}</span> Likes
              </div>
              <div className="dislikes">
                <span>{dislikes_count+ counterDislike}</span> Dislikes
              </div>
              <div className="comments">
                <span>{comments_count}</span> Comments
              </div>
            </div>
          </PostDetails>

          <PostFooter>
            <div
              className="icon-center like"
              id={"like" + active}
              onClick={handleLike}
            >
              <ThumbUpOutlinedIcon fontSize="small" id="1" />
            </div>
            <div
              className="icon-center dislike"
              onClick={handleDislike}
              id={"dislike" + activeDislike}
            >
              <ThumbDownAltOutlinedIcon fontSize="small" id="2" />
            </div>
            <div className="icon-center comment">
              <ChatBubbleOutlineIcon fontSize="small" id="3" />
            </div>
            <div className="icon-center share">
              <ShareIcon fontSize="small" id="4" />
            </div>
          </PostFooter>
        </div>
      </PostBody>
    </>
  );
};
