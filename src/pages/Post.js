import { Sidebar } from "../components/Sidebar/Sidebar";
import { Post } from "../components/Post/Post";
import { Widgets } from "../components/Widgets/Widgets";

import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <Post />
      <Widgets />
    </div>
  );
};

export default Home;
