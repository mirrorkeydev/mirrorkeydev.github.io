/*
 * The home/landing page of the website.
 * Contains preview boxes for other pages on the site.
 */

const HomeTemplate =
`<div id="body-container">

  <PreviewBox title="About" url="/about" moreText="read more" class="stagger">
    Hello! My name is Melanie, and I'm a sophomore at Oregon State University.
  </PreviewBox>

  <PreviewBox title="Projects" url="/projects" moreText="see more" class="stagger">
    <CaptionedImage caption="Appstract (2018)" imgsource="./assets/appstract.png"
    captionHref="https://github.com/mirrorkeydev/Appstract"
    imgHref="https://github.com/mirrorkeydev/Appstract">
      An artistically abstract Android icon pack. 300+ icons supported across 25+ launchers.
      Built on the open source CandyBar dashboard. Available on the Google Play Store
      <a href="https://play.google.com/store/apps/details?id=com.melon.appstract&hl=en_US">here.</a>
    </CaptionedImage>
  </PreviewBox>

  <PreviewBox title="Contact" url="/contact" moreText="more ways to reach me" class="stagger">
    <div class="preview-icons-grid">
      <a class="icon-link" href="mailto:mirrorkeydev@gmail.com">
        <i class="fas fa-envelope fa-3x"></i>
      </a>
      <a class="icon-link" href="https://www.linkedin.com/in/mgutzmann">
        <i class="fab fa-linkedin-in fa-3x"></i>
      </a>
      <a class="icon-link" href="https://github.com/mirrorkeydev">
        <i class="fab fa-github fa-3x"></i>
      </a>
    </div>
  </PreviewBox>

</div>`;

import {PreviewBox} from '../components/previewbox.js';
import {CaptionedImage} from '../components/captionedimage.js';

const Home = {
  template: HomeTemplate,
  components: {
    'PreviewBox': PreviewBox,
    'CaptionedImage': CaptionedImage,
  },
  mounted() {
    // Only play the staggering animation if the user is visiting the
    // home page for the first time during their loaded page session.
    if (!this.$parent.vistedBefore) {
      anime({
        targets: '.stagger',
        translateY: -150,
        direction: 'reverse',
        opacity: 0,
        duration: 750,
        easing: 'easeInExpo',
        delay: anime.stagger(700, {direction: 'reverse'})
      });

      // Failsafe: ensure that if the animation fails,
      // we still show the elements in the correct location.
      Array.from(document.getElementsByClassName("stagger")).forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0px)";
      })

      this.$parent.vistedBefore = true;
    }
  },
};

export {Home};
