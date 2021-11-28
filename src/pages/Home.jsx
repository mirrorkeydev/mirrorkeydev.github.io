import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import './Home.css';
import video from "../assets/desktop-background.mp4"

export default function Home() {
  const vid = useRef(null)
  const title = useRef(null)
  const nav = useRef(null)

  const fadein = (element, speed) => {
    var op = 0;
    var timer = setInterval(() => {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op += op * 0.1 || 0.1;
    }, speed);
    element.oncanplay = undefined;
  }

  useEffect(() => {
    vid.current.oncanplay = () => {
      fadein(vid.current, 50);
    };
    // Wait for font load to avoid Flash Of Unstyled Text
    document.fonts.load("12px Rubik").then(() => {fadein(title.current, 5)});
    document.fonts.load("12px Roboto").then(() => {fadein(nav.current, 5)})
  }, [])

  return (
    <div className="home">
      <video autoPlay loop muted playsInline id="home-video" ref={vid} className="blur">
        <source src={video} type="video/mp4"/>
      </video>
      <nav id="nav-container" ref={nav}>
        <Link to="/about" className="nav-link">about</Link>
        <Link to="/projects" className="nav-link">projects</Link>
        <Link to="/art" className="nav-link">art</Link>
        <Link to="/contact" className="nav-link">contact</Link>
      </nav>
      <h1 id="title" className="unselectable" ref={title}>melanie<br/>gutzmann</h1>
    </div>
  )
}
