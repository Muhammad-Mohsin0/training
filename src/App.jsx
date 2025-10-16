import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/ecommerce" element={<HomeTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
