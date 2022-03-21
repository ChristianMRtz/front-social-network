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

export const PostStructure = () => {
  return (
    <>
      <Post>
        <div className="post-avatar">
          <Avatar
            src="https://randomuser.me/api/portraits/women/13.jpg"
            alt="user"
          />
        </div>
        <div className="username">
          <h3>User name</h3>
          <h4>@username</h4>
        </div>
      </Post>
      <PostBody>
        <div>
          <div>
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
          <PostDetails>
            <div className="date">1:55 AM · Mar 21, 2022</div>
            <div className="counter-reactions">
              <div className="likes">
                <span>230</span> Likes
              </div>
              <div className="dislikes">
                <span>10</span> Dislikes
              </div>
              <div className="comments">
                <span>10</span> Comments
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
