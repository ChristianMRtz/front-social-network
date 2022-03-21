import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./stylesheets/GlobalStyles";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
