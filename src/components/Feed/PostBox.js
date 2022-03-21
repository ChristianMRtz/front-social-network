import { Postbox, Div, Form, Avatar } from "./styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import upload_gif from "../../assets/upload_gif.svg";
import upload_img from "../../assets/upload_img.svg";

export const PostBox = () => {
  return (
    <Postbox>
      <Form>
        <Div>
          <Avatar
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="user"
          />
          <div className="columns">
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="What's happening?"
            />
            <div className="element-submit">
              <div className="imgs">
                <img src={upload_img} alt="img" />
                <img src={upload_gif} alt="gif" />
              </div>
              <div>
                <Button 
                variant="outlined"
                style={{"opacity": "0.5"}}
                >Tweet</Button>
              </div>
            </div>
          </div>
        </Div>
      </Form>
    </Postbox>
  );
};
