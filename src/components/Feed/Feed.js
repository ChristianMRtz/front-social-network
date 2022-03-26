import { Posts } from "./Posts";
import { PostBox } from "./PostBox";
import { Container, Header } from "./styles";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Feed = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const [chargingPost, setChargingPost] = useState(10);
  // const addPost = useSelector((state) => state.addPost);

  function handleCharge(e) {
    e.preventDefault();
    setChargingPost(chargingPost + 10);
  }

  useEffect(() => {
    sessionStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <Container>
      <Header>
        <p>Home</p>
      </Header>
      <PostBox />
      {Object.keys(posts).length === 0 ? (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        posts
          ?.sort(function (a, b) {
            return new Date(b.created_at) - new Date(a.created_at);
          }).slice(0, chargingPost)
          .map((post) => (
            <div
              className="idDiv"
              key={post.id}
              id={post.id}
            >
              <Posts
                avatar={post.user.avatar}
                body={post.body}
                key={post.id}
                id={post.id}
                username={post.user.username}
                email={post.user.email}
                date={post.created_at}
                comments_count={post.comments_count}
                likes_count={post.likes_count}
                dislikes_count={post.dislikes_count}
              />
            </div>
          ))
      )}
      {Object.keys(posts).length > chargingPost ? (
        <Button onClick={handleCharge} variant="outlined">
          Charge 10 more
        </Button>
      ) : (
        ""
      )}
      <div className="separation-mobile"></div>
    </Container>
  );
};
