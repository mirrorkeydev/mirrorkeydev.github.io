import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import './Home.css';
import video from "../assets/desktop-background.mp4"

export default function Home() {
  const vid = useRef(null);

  const fadein = (element) => {
    var op = 0;
    var timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op += op * 0.1 || 0.1;
    }, 50);
    element.oncanplay = undefined;
  }

  useEffect(() => {
    vid.current.oncanplay = () => {
      fadein(vid.current);
    };
  })

  return (
    <div className="home">
      <video autoPlay loop muted playsInline id="home-video" ref={vid} className="blur">
        <source src={video} type="video/mp4"/>
      </video>
      <nav id="nav-container">
        <Link to="/about" className="nav-link">about</Link>
        <Link to="/projects" className="nav-link">projects</Link>
        <Link to="/art" className="nav-link">art2</Link>
        <Link to="/contact" className="nav-link">contact</Link>
      </nav>
      <h1 id="title" className="unselectable">melanie<br/>gutzmann</h1>
    </div>
  )
}
