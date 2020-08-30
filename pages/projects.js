/*
 * The projects page of the website, containing
 * a grid of projects I've worked on.
 */

const ProjectsTemplate =
`<div id="body-container">

  <h2 class="centered">Projects</h2>

  <div class="imagebox-collection">
    <ImageBox title="Sprout (2020)" link="/Sprout"
    subtitle="Personal project" img="./assets/sprout.png">
      A dashboard that shows real-time statistics about my plants and their environment.
      Offers soil moisture charts for each plant connected to Sprout and
      environmental statistics about the plants' environment, including temperature/humidity.
      Plus, it's pretty cute.
      <div class="imagebox-icons-grid">
        <i class="fab fa-vuejs fa-2x imagebox-icon"></i>
        <i class="fab fa-node-js fa-2x imagebox-icon"></i>
        <i class="fab fa-aws fa-2x imagebox-icon"></i>
        <i class="fab fa-figma fa-2x imagebox-icon"></i>
      </div>
    </ImageBox>

    <ImageBox title="MathLang (2020)" link="https://github.com/mirrorkeydev/MathLang"
    subtitle="Programming Language Fundamentals Final Project" img="./assets/mathlang.png">
      A stack-based language that performs basic mathematic/logic operations. 
      Values include integers, doubles, booleans, tuples, commands, and functions.
      Can perform basic operations on values and allows conditional logic
      such as if/else statements and while/for loops. Interpreter written in Haskell.
    </ImageBox>

    <ImageBox title="Visualizations (2020)" link="https://github.com/mirrorkeydev/Visualizations"
    subtitle="Personal project" img="./assets/visualizations.png">
      Various visualizations created as an exercise in data processing. Includes
      interactive charts and original infographics, exploring data such as my Netflix
      binges and the patterns of texts to a friend.
      <div class="imagebox-icons-grid">
        <i class="fab fa-python fa-2x imagebox-icon"></i>
        <i class="fab fa-html5 fa-2x imagebox-icon"></i>
        <i class="fab fa-adobe fa-2x imagebox-icon"></i>
      </div>
    </ImageBox>

    <ImageBox title="CatSpot (2019)" link="https://github.com/mirrorkeydev/CatSpot"
    subtitle="Web Development Final Project" img="./assets/catspot.png">
      A web app that allows students to track cat spottings on campus.
      Cats can be given names and assigned pictures, energy levels, sociability status,
      and a recent location. The interactive map shows cat spottings in the last 
      24 hours.
      <div class="imagebox-icons-grid">
        <i class="fab fa-js fa-2x imagebox-icon"></i>
        <i class="fab fa-html5 fa-2x imagebox-icon"></i>
        <i class="fab fa-css3 fa-2x imagebox-icon"></i>
        <i class="fab fa-node fa-2x imagebox-icon"></i>
      </div>
    </ImageBox>

    <ImageBox title="Appstract (2018)" link="https://github.com/mirrorkeydev/Appstract"
    subtitle="Personal project" img="./assets/appstract.png">
      An artistically abstract Android icon pack. 300+ icons supported across 25+ launchers.
      Built on the open source CandyBar dashboard. Available on the Google Play Store
      <a href="https://play.google.com/store/apps/details?id=com.melon.appstract&hl=en_US">here.</a>
      <div class="imagebox-icons-grid">
        <i class="fab fa-android fa-2x imagebox-icon"></i>
        <i class="fab fa-google-play fa-2x imagebox-icon"></i>
        <i class="fab fa-adobe fa-2x imagebox-icon"></i>
      </div>
    </ImageBox>

  </div>

</div>`;

import {ImageBox} from '../components/imagebox.js';

const Projects = {
  template: ProjectsTemplate,
  components: {
    'ImageBox': ImageBox,
  },
};

export {Projects};
