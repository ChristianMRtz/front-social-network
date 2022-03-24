import { Posts } from "./Posts";
import { PostBox } from "./PostBox";
import { Container, Header } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const retrievePosts = async () => {
    const response = await api.get("/posts");
    return response.data;
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await retrievePosts();
      if (allPosts) setPosts(allPosts);
    };
    getAllPosts();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home/" + e.target.id);
  };

  return (
    <Container>
      <Header>
        <p>Home</p>
      </Header>
      <PostBox />
      {posts.map((post) => (
        <div
          className="idDiv"
          style={{ cursor: "pointer" }}
          key={post.id}
          id={post.id}
          onClick={handleClick}
        >
          <Posts
            avatar={post.user.avatar}
            body={post.body}
            key={post.id}
            username={post.user.username}
            email={post.user.email}
            date={post.created_at}
            comments_count={post.comments_count}
            likes_count={post.likes_count}
            dislikes_count={post.dislikes_count}
          />
        </div>
      ))}
      <div className="separation-mobile"></div>
    </Container>
  );
};
