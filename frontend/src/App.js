import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Segmentation from "./pages/segmentation";
import Yolo from "./pages/yolo";
import Result from "./pages/result";
import Info from "./pages/info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/segmentation" element={<Segmentation/>}/>
        <Route path="/yolo" element={<Yolo/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </Router>
  )
}

export default App;
