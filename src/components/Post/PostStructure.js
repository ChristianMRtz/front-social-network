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

export const PostStructure = ({
  avatar,
  body,
  username,
  email,
  date,
  comments_count,
  likes_count,
  dislikes_count,
  images
}) => {
  const parseDate = (date) => {
    const dateFormat = new Date(date?.slice(0, -5));
    return dateFormat.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <>
      <Post>
        <div className="post-avatar">
          <Avatar
            src={avatar}
            alt="user"
          />
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
          {images ? <Images src="https://picsum.photos/1080/720" alt="post" /> : ""}
          <PostDetails>
            <div className="date">{parseDate(date)}</div>
            <div className="counter-reactions">
              <div className="likes">
                <span>{likes_count}</span> Likes
              </div>
              <div className="dislikes">
                <span>{dislikes_count}</span> Dislikes
              </div>
              <div className="comments">
                <span>{comments_count}</span> Comments
              </div>
            </div>
          </PostDetails>

          <PostFooter>
            <div className="icon-center like">
              <ThumbUpOutlinedIcon fontSize="small" id="1" />
            </div>
            <div className="icon-center dislike">
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
