import './App.css';
import {
  BrowserRouter as Router,
  Switch,
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
      <Router>
      <SecondaryHeader/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
