import './About.css';
import FadeIn from 'react-fade-in';

export default function About() {
  return (
    <div class="about">
    <div class="about-container">
      <FadeIn>
        <p>
          Hello! My name is Melanie, and I'm a senior at Oregon State University
          studying CS.
        </p>
        <p>
          During my undergrad, I worked at OSU's Center for Applied
          Systems and Software.
          I also spent two summers interning at Google.
        </p>
        <p>
          In my free time, I like taking care of my houseplants, attempting art, mending my
          possessions, and low-stakes hiking.
        </p>
      </FadeIn>
    </div>
  </div>
  )
}
