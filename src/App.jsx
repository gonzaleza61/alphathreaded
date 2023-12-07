import Home from "./pages/Home";
import TeamPage from "./pages/TeamsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
