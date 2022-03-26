import {
  Post,
  PostBody,
  Avatar,
  PostDescription,
  Images,
  PostFooter,
  StyledLink,
} from "./styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
// import api from "../../services/fetch";

export const Posts = ({
  avatar,
  body,
  username,
  email,
  date,
  comments_count,
  likes_count,
  dislikes_count,
  images,
  id,
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
    <Post>
      <div className="post-avatar">
        <Avatar
          src={
            avatar
              ? avatar
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user"
        />
      </div>
      <PostBody>
        <div>
          <div>
            <h3>
              {username} <span>{email}</span>
            </h3>
            <StyledLink to={`/home/${id}`}>
              <PostDescription>
                <p>{body}</p>
              </PostDescription>
            </StyledLink>
          </div>
          {images ? (
            <Images src="https://picsum.photos/1080/720" alt="post" />
          ) : (
            ""
          )}
          <p className="date">{parseDate(date)}</p>
          <PostFooter>
            <div
              className="icon-center like"
              id={"like" + active}
              onClick={handleLike}
            >
              <ThumbUpOutlinedIcon fontSize="small" id="1" />{" "}
              <span>{likes_count + counterLike}</span>
            </div>
            <div
              className="icon-center dislike"
              onClick={handleDislike}
              id={"dislike" + activeDislike}
            >
              <ThumbDownAltOutlinedIcon fontSize="small" id="2" />{" "}
              <span>{dislikes_count + counterDislike}</span>
            </div>
            <div className="icon-center comment">
              <ChatBubbleOutlineIcon fontSize="small" id="3" />{" "}
              <span>{comments_count}</span>
            </div>
            <div className="icon-center share">
              <ShareIcon fontSize="small" id="4" />
            </div>
          </PostFooter>
        </div>
      </PostBody>
    </Post>
  );
};
