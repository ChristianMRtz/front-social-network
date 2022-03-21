import {
  Post,
  PostBody,
  Avatar,
  PostDescription,
  Images,
} from "../Feed/styles";
import { PostFooterComment } from "./styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

export const Comments = () => {
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
          <PostFooterComment>
            <div>
              <ThumbUpOutlinedIcon fontSize="small" /> <span>11 likes</span>
            </div>
            <div>
              <ThumbDownAltOutlinedIcon fontSize="small" /> <span>10 dislikes</span>
            </div>
          </PostFooterComment>
        </div>
      </PostBody>
    </Post>
  );
};
