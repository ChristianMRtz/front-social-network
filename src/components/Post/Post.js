import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { PostStructure } from "./PostStructure";
import { Container, Header } from "./styles";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export const Post = () => {
  const [postBody, setPostBody] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const retrievePost = async () => {
      const response = await api.get("/posts/" + id);
      return response.data;
    };

    const getThePost = async () => {
      const allPost = await retrievePost();
      if (allPost) setPostBody(allPost);
    };
    getThePost();
  }, [id]);

  return (
    <Container>
      <Header>
        <p>Post</p>
      </Header>
      <PostStructure
        body={postBody.body}
        username={postBody.username}
        email={postBody.email}
        avatar={postBody.avatar}
        date={postBody.created_at}
        comments_count={postBody.comments_count}
        likes_count={postBody.likes_count}
        dislikes_count={postBody.dislikes_count}
      />
      {postBody.comments?.map((comment) => (
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
