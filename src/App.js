import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { globalCSS } from "./stylesheets/GlobalStyles";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { LoginAndRegistration } from "./pages/LoginAndRegistration";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <Router>
        <Routes>
          <Route path="/" element={<LoginAndRegistration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
