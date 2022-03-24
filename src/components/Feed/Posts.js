import {
  Post,
  PostBody,
  Avatar,
  PostDescription,
  Images,
  PostFooter,
} from "./styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

export const Posts = ({
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
    <Post>
      <div className="post-avatar">
        <Avatar
          src={avatar}
          alt="user"
        />
      </div>
      <PostBody>
        <div>
          <div>
            <h3>
              {username} <span>{email}</span>
            </h3>
            <PostDescription>
              <p>{body}</p>
            </PostDescription>
          </div>
          {images ? <Images src="https://picsum.photos/1080/720" alt="post" /> : ""}
          <p className="date">{parseDate(date)}</p>
          <PostFooter>
            <div className="icon-center like">
              <ThumbUpOutlinedIcon fontSize="small" id="1" /> <span>{likes_count}</span>
            </div>
            <div className="icon-center dislike">
              <ThumbDownAltOutlinedIcon fontSize="small" id="2" />{" "}
              <span>{dislikes_count}</span>
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
