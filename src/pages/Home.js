import { Sidebar } from "../components/Sidebar/Sidebar";
import { Feed } from "../components/Feed/Feed";
import { Widgets } from "../components/Widgets/Widgets";
import { useEffect } from "react";
import api from "../services/fetch";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../services/redux/actions/actions";

const Home = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get("/posts", { withCredentials: false }).catch((err) => {
        console.log("Error: ", err);
      });
      dispatch(setPosts(response.data));
    };

    fetchPosts();
  }, [dispatch]);

  console.log("Posts: ", posts);

  return (
    <div className="Home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
