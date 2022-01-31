import './About.css';
import { useEffect, useRef } from 'react';
import Linker from '../components/Linker'

export default function About() {
  const itemsRef = useRef([])

  useEffect(() => {
    async function sleep(ms) {
      await new Promise(r => setTimeout(r, ms))
    }
    async function fadeInContainers() {
      let sleepAmount = 0
      for (const container of itemsRef.current) {
        await sleep(sleepAmount)
        container.classList.remove('invisible')
        container.classList.add('fadeIn')
        sleepAmount += 150
      }
    }
    fadeInContainers()
  }, [])

  return (
    <div className="about">
      <div className="left">
        <div className="bio container invisible" ref={el => itemsRef.current.push(el)}>
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
        <div className="interests container invisible" ref={el => itemsRef.current.push(el)}>
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
            <li>Procedurally generated art</li>
          </ul>
        </div>
        <div className="books container invisible" ref={el => itemsRef.current.push(el)}>
          <h2>Books</h2>
          Some reads I really liked:
          <ul>
            <Linker
              url="https://carolinecriadoperez.com/book/invisible-women/"
              title="Invisible Women"
              author="Caroline Criado Perez"
            />
          </ul>
        </div>
      </div>
      
      <div className="links container invisible" ref={el => itemsRef.current.push(el)}>
        <h2>Link Collection</h2>
        <p>
          Things I think are neat from around the web.
        </p>
        <h4>Essays</h4>
        <ul>
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
        <h4>Video</h4>
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
        <h4>Audio</h4>
        <ul>
          <Linker
          url="https://casefilepodcast.com/case-76-silk-road-part-1/"
          title="Case 76: Silk Road"
          author="Casefile"
          notes="Three-part podcast episode detailing the rise and fall of Silk Road, an illicit-goods market in the darknet."
          />
          <Linker
          url="https://darknetdiaries.com/"
          title="Darknet Diaries"
          author="Jack Rhysider"
          />
        </ul>
        <h4>Programming</h4>
        <ul>
          <Linker
          url="https://automatetheboringstuff.com/"
          title="Automate The Boring Stuff With Python"
          author="Al Sweigart"
          notes="A classic introduction to practical scripting for non-programmers."
          />
          <Linker
          url="https://tylerxhobbs.com/essays/2020/flow-fields"
          title="Generative Art: Flow Fields"
          author="Tyler Hobbs"
          notes="One of my favorite generative artists and a great essay describing how he approaches flow fields in his work."
          />
        </ul>
        <h4>Art</h4>
        <ul>
          <Linker
          url="https://www.muddycolors.com/2015/04/10-things-about-edges-2/"
          title="10 Things About Edges"
          author="Gregory Manchess"
          />
          <Linker
          url="https://drawabox.com/"
          title="drawabox"
          />
          <Linker
          url="https://books.google.com/books/about/Drawing_the_Head_Hands.html?id=AUNKEAAAQBAJ"
          title="Drawing The Head & Hands"
          author="Andrew Loomis"
          />
        </ul>
      </div>
    </div>
  )
}
