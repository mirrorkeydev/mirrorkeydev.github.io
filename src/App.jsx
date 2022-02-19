import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Art from "./pages/Art"
import Home from "./pages/Home"
import SecondaryHeader from './components/SecondaryHeader'

export default function App() {
  return (
    <div id="app">
      <Router basename={process.env.PUBLIC_URL}>
      <SecondaryHeader/>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/art" element={<Art />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      </Router>
    </div>
  );
}
