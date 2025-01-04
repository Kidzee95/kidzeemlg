import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from "./components/Programs";
import PlaygroupDetails from "./components/PlaygroupDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/playgroup" element={<PlaygroupDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
