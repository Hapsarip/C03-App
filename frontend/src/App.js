import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Segmentation from "./pages/segmentation";
import Yolo from "./pages/yolo";
import Result from "./pages/result";
import Info from "./pages/info";
import Predict from "./pages/prediction";
import Dropdown from "./component/dropdown";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/segmentation" element={<Segmentation/>}/>
        <Route path="/yolo" element={<Yolo/>}/>
        <Route path="/predict" element={<Predict/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/cb" element={<Dropdown/>}/>
      </Routes>
    </Router>
  )
}

export default App;
