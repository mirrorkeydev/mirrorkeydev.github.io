import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/About"
import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"
import Home from "./pages/Home"

export default function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
