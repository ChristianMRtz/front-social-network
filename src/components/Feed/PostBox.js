import api from "../../services/fetch";
import { Postbox, Div, Form, Avatar } from "./styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import upload_gif from "../../assets/upload_gif.svg";
import upload_img from "../../assets/upload_img.svg";
import { useState } from "react";
import { addPost } from "../../services/redux/actions/actions";
import { useDispatch } from "react-redux";

export const PostBox = () => {
  const [text, setText] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    api
      .post("/posts", {
        post: {
          body: text.split("\n").join(""),
          user_id: user.currentUser.user.id,
        },
      })
      .then((response) => {
        dispatch(addPost(response.data));
        window.location.reload(false);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
    e.preventDefault();
  };
  const avatar = user.currentUser.user.avatar;

  return (
    <Postbox>
      <Form>
        <Div>
          <Avatar
            src={
              avatar
                ? avatar
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="user"
          />

          <div className="columns">
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="What's happening?"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="element-submit">
              <div className="imgs">
                <img src={upload_img} alt="img" />
                <img src={upload_gif} alt="gif" />
              </div>
              <div>
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="Tweet"
                  style={{ opacity: "0.5" }}
                />
              </div>
            </div>
          </div>
        </Div>
      </Form>
    </Postbox>
  );
};
