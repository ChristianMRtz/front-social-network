import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { PostStructure } from "./PostStructure";
import { Container, Header } from "./styles";
import { Div, Form, Avatar } from "../Feed/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useParams } from "react-router-dom";
import api from "../../services/fetch";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from "../../services/redux/actions/actions";

export const Post = () => {
  const id = useParams().id;
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(0.5);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const handleSubmit = (e) => {
    setOpacity(text.length !== 0 ? 1 : 0.5);
    api
      .post(
        "/comments",
        {
          comment: {
            body_comment: text,
            post_id: id,
            user_id: user.currentUser.user.id,
          },
        },
        { withCredentials: false }
      )
      .then((response) => {
        window.location.reload(false);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
    e.preventDefault();
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get("/posts/" + id).catch((err) => {
        console.log("Error: ", err);
      });
      dispatch(selectedPost(response.data));
    };

    fetchPost();
  }, [dispatch, id]);

  return (
    <Container>
      <Header>
        <p>Post</p>
      </Header>
      {console.log(text.split("\n").join(""))}
      {Object.keys(post).length === 0 ? (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <PostStructure
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          avatar={post.avatar}
          username={post.username}
          email={post.email}
          date={post.created_at}
          comments_count={post.comments_count}
          likes_count={post.likes_count}
          dislikes_count={post.dislikes_count}
        />
      )}
      <Form className="separation">
        <Div>
          <Avatar src={user.currentUser.user.avatar} alt="user" />
          <div className="columns">
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Comment here!"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="element-submit">
              <div className="imgs"></div>
              <div>
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="Comment"
                  style={{ opacity: opacity }}
                />
              </div>
            </div>
          </div>
        </Div>
      </Form>
      {post.comments
        ?.sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .map((comment) => (
          <Comments
            key={comment.id}
            comment={comment.body_comment}
            username={comment.user.username}
            email={comment.user.email}
            avatar={comment.user.avatar}
            date={comment.created_at}
          />
        ))}
    </Container>
  );
};
