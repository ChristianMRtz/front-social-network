import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./stylesheets/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
