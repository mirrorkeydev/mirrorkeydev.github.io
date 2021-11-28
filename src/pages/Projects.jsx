import ProjectCard from '../components/ProjectCard'
import SproutImage from '../assets/sprout806x600.png'
import AppstractImage from '../assets/appstract806x600.png'
import VizImage from '../assets/visualizations806x600.png'
import NomsImage from '../assets/noms806x600.png'
import MathLangImage from '../assets/mathlang806x600.png'
import CatSpotImage from '../assets/catspot806x600.png'
import VideoStill from '../assets/videostill806x600.png'
import Inventory from '../assets/inventory806x600.png'
import "./Projects.css"
import FadeIn from 'react-fade-in';

export default function Projects() {
  return (
    <div>
      <FadeIn className="projects-container">
      <ProjectCard
          title="Personal Inventory CLI"
          subtitle="Personal Project"
          github="https://github.com/mirrorkeydev/inventory"
          img={Inventory}>
          A Python command-line interface to find, organize, and generally manage personal belongings.
        </ProjectCard>
      <ProjectCard
          title="mirrorkey.dev"
          subtitle="Personal Project"
          site="https://mirrorkey.dev"
          github="https://github.com/mirrorkeydev/mirrorkeydev.github.io"
          img={VideoStill}>
          The site you're looking at! Once built in Vue, then later ported to React,
          I built most of this site by hand to display the things I'm proud of.
        </ProjectCard>
        <ProjectCard
          title="Sprout"
          subtitle="Personal Project"
          site="https://mirrorkey.dev/Sprout"
          github="https://github.com/mirrorkeydev/Sprout"
          img={SproutImage}>
          A dashboard that shows real-time statistics about my
          plants and their environment. Offers soil moisture charts for each plant connected
          to Sprout and environmental statistics about the plants' environment,
          including temperature/humidity. Plus, it's pretty cute.
        </ProjectCard>
        <ProjectCard
          title="Appstract"
          subtitle="Personal Project"
          site="https://play.google.com/store/apps/details?id=com.melon.appstract&hl=en_US"
          github="https://github.com/mirrorkeydev/Appstract"
          img={AppstractImage}>
          An abstract Android icon pack. 350k downloads and 25k active users.
          Built on the open source CandyBar dashboard. Available on the Google Play Store.
        </ProjectCard>
        <ProjectCard
          title="Visualizations"
          subtitle="Personal Project"
          site="https://mirrorkey.dev/Visualizations"
          github="https://github.com/mirrorkeydev/Visualizations"
          img={VizImage}>
            Various visualizations created as exercises in data processing.
            Includes interactive charts and original infographics, exploring
            data such as Netflix binges, the patterns of texts to a friend,
            and reality dating show simulations.
        </ProjectCard>
        <ProjectCard
          title="noms"
          subtitle="Google STEP Internship Capstone, Summer 2020"
          github="https://github.com/googleinterns/noms"
          img={NomsImage}>
            A full-stack web app connecting students and college organizations
            to battle food insecurity and food waste. noms allows college organizations to post the
            locations of free food on campus and for students to view and receive notifications for
            these posts.
        </ProjectCard>
        <ProjectCard
          title="MathLang"
          subtitle="Programming Language Fundamentals Final, March 2020"
          github="https://github.com/mirrorkeydev/MathLang"
          img={MathLangImage}>
            A stack-based language that performs basic mathematic/logic operations.
            Values include integers, doubles, booleans, tuples, commands, and functions.
            Can perform basic operations on values and allows conditional logic such as if/else
            statements and while/for loops. Interpreter written in Haskell.
        </ProjectCard>
        <ProjectCard
          title="CatSpot"
          subtitle="Web Development Final, December 2019"
          github="https://github.com/mirrorkeydev/CatSpot"
          img={CatSpotImage}>
            A web app that allows students to track cat spottings on campus.
            Cats can be given names and assigned pictures, energy levels, sociability status,
            and a recent location. The interactive map shows cat spottings in the last 24 hours.
        </ProjectCard>
      </FadeIn>
    </div>
  )
}
