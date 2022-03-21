import { Sidebar } from "../components/Sidebar/Sidebar";
import { Feed } from "../components/Feed/Feed";
import { Widgets } from "../components/Widgets/Widgets";

import React from "react";

const Home = () => {
  return (
    <div className="Home">
      {/* sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
};

export default Home;
