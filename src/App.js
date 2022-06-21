import Navigation from "./components/Navigation"
import Card from "./components/Card"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Emily from "./pages/Emily";
import Steve from "./pages/Steve";
import Ellon from "./pages/Ellon";
import Error from "./pages/Error";




function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Emily/>}/>
        <Route path="/Steve" element={<Steve/>}/>
        <Route path="/Ellon" element={<Ellon/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;