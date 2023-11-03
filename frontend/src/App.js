import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route/>
      </Routes>
    </Router>
    // <div className="App">
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // </div>
  )
}

export default App;
