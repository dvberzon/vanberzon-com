import React from "react"
import Layout from "../components/layout"

const TalksPage = ({location}) => (
  <Layout location={location} title="Talks">
    <h1>Talks</h1>
    <p>Daniel is actively seaking opportunities to speak at Tech Conferences
    or meetups. Subjects range from code methodologies and readability to 
    specific technologies. Below are some examples of previous talks as well
    as any programmed future appearances.</p>
    <h2>Upcoming talks</h2>
    <h3>The Nitty Gitty</h3>
    <cite>Thurs 5th Sep 2019 - <a href="https://asyncjs.com/">Async Brighton</a></cite>
    <p>Git is not complicated, but it is complex (and confusing). In this talk I explain the 
    basic building blocks of git: commits, blobs, trees and refs. I then build up, past branches and merges
    to remotes and rebases in an attempt to demystify the tool we all rely on.</p>
    <h3>Readable code - Available without Prescription</h3>
    <cite>Fri 22nd Nov 2019 - <a href="https://halfstackconf.com/london/">HalfStack Conference London</a></cite>
    <p>This talk tells the story of a revolution in the world of linguistics 
    and how we can apply it to software development. Everyone agrees on the importance of readable code, but no-one can agree
    on how to write it. Are code comments evil or vital? Is it better to be
    terse or explicit? There are many conflicting rules out there, and they
    all feel a little arbitrary.</p>
    <p>Grammar is also full of rules, and not all rules are the same. "Prescriptive"
    rules are hard to follow. "Descriptive" rules are intuitive.
    With the help of Shakespeare, Noam Chomsky and some little green men,
    we will learn the dangers of prescriptive rules, and discover how an amateur
    online scientific experiment could help us write readable code.</p>
    <h2>Previous talks</h2>
    <h3>Useable, Grammatical and Readable Code</h3>
    <cite>Thurs 6th Dec 2018 - <a href="https://asyncjs.com/readable-code/">Async Brighton</a></cite>
    <p>As software developers, we all know that we need to make our code more
      readable - but how exactly? There is not a lot of literature out there
      on the subject, and what there is can be very dogmatic and contradictory. 
      In this talk, I attempt to tackle the issue by learning from the worlds of
      Linguistics and UX, which have successfully solved similar problems. I present
      the initial findings from my readability experiment at <a href="http://howreadable.com">howreadable.com</a>.
    </p>
    <iframe 
      title="Useable Grammatical and Readable Code - Async Brighton Dec 2018"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dlczTNFHpww"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />

    <h3>Random Thoughts</h3>
    <cite>Fri 6th July 2018 - <a href="https://brightonruby.com/2018/random-thoughts-daniel-berzon/">Brighton Ruby</a></cite>
    <p>How a single line of ruby code, the flip of a coin and some bad luck lead to an understanding of how random numbers really work, and why fairness isn’t always the best policy.</p>
    <p>
      <a href="https://brightonruby.com/2018/random-thoughts-daniel-berzon/">Watch the video <span role="img" aria-label="watch">👀</span></a>
    </p>
    
  </Layout>
);

export default TalksPage;