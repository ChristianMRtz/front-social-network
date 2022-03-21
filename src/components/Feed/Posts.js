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

export const Posts = () => {
  return (
    <Post>
      <div className="post-avatar">
        <Avatar
          src="https://randomuser.me/api/portraits/women/13.jpg"
          alt="user"
        />
      </div>
      <PostBody>
        <div>
          <div>
            <h3>
              User name <span>@username</span>
            </h3>
            <PostDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                fugit atque, qui doloremque expedita, animi tenetur sunt sint
                quos hic molestiae eos cum! Voluptatibus, corrupti qui similique
                culpa nulla in.
              </p>
            </PostDescription>
          </div>
          <Images
            src="https://pbs.twimg.com/media/FOUL1SxVIAYZec_?format=png&name=small"
            alt="post"
          />
          <PostFooter>
            <div className="icon-center like">
              <ThumbUpOutlinedIcon fontSize="small" id="1" /> <span>11</span>
            </div>
            <div className="icon-center dislike">
              <ThumbDownAltOutlinedIcon fontSize="small" id="2" /> <span>10</span>
            </div>
            <div className="icon-center comment">
              <ChatBubbleOutlineIcon fontSize="small" id="3" /> <span>10</span>
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
