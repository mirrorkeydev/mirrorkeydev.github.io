import './About.css';
import Linker from '../components/Linker'

export default function About() {
  return (
    <div class="about">
      <div class="left">
        <div class="bio container">
          <h2>Bio</h2>
          <p>
            Hello! My name is Melanie, and I'm a senior at Oregon State University
            studying CS.
          </p>
          <p>
            During my undergrad, I worked at OSU's Center for Applied
            Systems and Software.
            I also spent two summers interning at Google, and I'll
            be returning to Google as a full time SWE after I graduate.
          </p>
          <p>
            In my free time, I like taking care of my houseplants, attempting art, mending my
            possessions, and low-stakes hiking.
          </p>
        </div>
        <div class="bio container">
          <h2>Interests</h2>
          Talk to me about:
          <ul>
            <li>Embroidery, sashiko, and visible mending</li>
            <li>Houseplants</li>
            <li>Full stack development and scripting</li>
            <li>Digital art and portraiture</li>
            <li>Women in STEM</li>
            <li>Android icon packs</li>
            <li>Go, Python</li>
          </ul>
        </div>
      </div>
  
      <div class="links container">
        <h2>Link Collection</h2>
        <p>
          Things I think are neat from around the web.
        </p>
        <h4>Essays</h4>
        <ul>
          <Linker
          url="https://www.lesswrong.com/s/BQBqPowfxjvoee8jw/p/bXuAXCbzw9hsJSuEN"
          title="The Control Group Is Out Of Control"
          author="Scott Alexander"
          />
          <Linker
          url="https://noidea.dog/glue"
          title="Being Glue"
          author="Tanya Reilly"
          />
          <Linker
          url="https://www.kalzumeus.com/2012/01/23/salary-negotiation/"
          title="Salary Negotiation: Make More Money, Be More Valued"
          author="Patrick McKenzie"
          />
        </ul>
        <h4>Research</h4>
        <ul>
          <Linker
          url="https://www.cs.cmu.edu/afs/cs/project/gendergap/www/papers/anatomyWSQ99.html"
          title="The Anatomy of Interest: Women in Undergraduate Computer Science"
          author="CMU"
          />
        </ul>
        <h4>Videos</h4>
        <ul>
          <Linker
          url="https://www.youtube.com/watch?v=p4AdFD3E2ok"
          title="THE Vampire Diaries Video"
          author="Jenny Nicholson"
          notes="An absolute favorite rainy day masterpiece, no vampire diaries context required."
          />
          <Linker
          url="https://www.youtube.com/watch?v=9yjZpBq1XBE"
          title="Disney's FastPass: A Complicated History"
          author="Defunctland"
          />
        </ul>
        <h4>Miscellaneous</h4>
        <ul>
          <Linker
          url="https://automatetheboringstuff.com/"
          title="Automate The Boring Stuff With Python"
          author="Al Sweigart"
          notes="A classic introduction to practical scripting for non-programmers."
          />
          <Linker
          url="https://nb.paulbutler.org/surface-projection/"
          title="Surface Projection"
          author="Paul Butler"
          />
        </ul>
      </div>
    </div>
  )
}
