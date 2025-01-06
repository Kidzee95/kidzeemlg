import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Programs from "./components/Programs";
import PlaygroupDetails from "./components/PlaygroupDetails";
import NurseryDetails from "./components/NurseryDetails";
import KindergartenDetails from "./components/KindergartenDetails";
import PrimaryDetails from "./components/PrimaryDetails";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/playgroup" element={<PlaygroupDetails />} />
        <Route path="/programs/nursery" element={<NurseryDetails />} />
        <Route path="/programs/kindergarten" element={<KindergartenDetails />} />
        <Route path="/programs/primary" element={<PrimaryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;