import React from "react"
import Layout from "../components/layout"

const TalksPage = ({location}) => (
  <Layout location={location} title="Talks">
    <h1>Talks</h1>
    <p>Daniel is actively seeking opportunities to speak at Tech Conferences
    or meetups. Subjects range from code methodologies and readability to 
    specific technologies. Below are some examples of previous talks as well
    as any programmed future appearances.</p>
    <h2>Upcoming talks</h2>
    <h3>Readable Code - Available without Prescription</h3>
    <cite>Date TBC - <a href="https://2020.frontcon.com/sessions/readable-code-available-without-prescription/">FrontCon, Riga, Latvia</a></cite>
    <h2>Recent talks</h2>
    <h3>The Nitty Gitty - demystifying git</h3>
    <cite>Wed 13th May 2020 - <a href="https://www.meetup.com/MEGABITES-Tech-Lunch-n-Learns/events/270359119/">Megabites Tech Lunch and Learns</a> (online)</cite>
    <p>People treat Git like it's a car, but really it's more like a skateboard. In this talk I attempt to demystify git by looking at how  Git works under the hood. We look at the basics of Git, its building blocks, its branch model and how to manipulate its history.</p>
    <p>This talk was presented online as part of a series of <a href="https://www.meetup.com/MEGABITES-Tech-Lunch-n-Learns/">lunchtime tech talks</a></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/w7W8xVpQt9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Slides available on <a href="https://speakerdeck.com/dvberzon/the-nitty-gitty-a8f1454b-133e-44a6-b6a6-e6ba2ff2bef4">Speaker deck</a></p>
    <h3>Readable Code - Available without Prescription</h3>
    <cite>Fri 22nd Nov 2019 - <a href="https://halfstackconf.com/london/2019/">HalfStack Conference London</a></cite>
    <p>Grammar is all about rules, but not all rules are the same. This talk tells the story of a revolution in the world of linguistics and how we can apply it to software development.</p>
    <p>With the help of Shakespeare, Noam Chomsky and some little green men, we will learn the dangers of prescriptive rules, and discover how an amateur online scientific experiment could help us write readable code.</p>
    <iframe class="video" src="https://halfstackconf.streameventlive.com/embed/76" height="315" width="560" seamless="seamless" frameBorder="0" scrolling="no" allowfullscreen></iframe>
    <p>Slides available on <a href="https://speakerdeck.com/dvberzon/readable-code-available-without-prescription">Speaker deck</a></p>
    <h3>The Nitty Gitty</h3>
    <cite>Thurs 5th Sep 2019 - <a href="https://asyncjs.com/nitty-gitty/">Async Brighton</a></cite>
    <p>Git is not complicated, but it is complex (and confusing). In this talk, I explain the 
    basic building blocks of git: commits, blobs, trees and refs. I then build up, past branches and merges
    to remotes and re-bases in an attempt to demystify the tool we all rely on.</p>
    <p>Slides available on <a href="https://speakerdeck.com/dvberzon/the-nitty-gitty">Speaker deck</a></p>
    <h3 id="async-2018">Useable, Grammatical and Readable Code</h3>
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
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
    <p>Slides available on <a href="https://speakerdeck.com/dvberzon/useable-grammatical-and-readable-code">Speaker deck</a></p>
    <h3 id="random_thoughts">Random Thoughts</h3>
    <cite>Fri 6th July 2018 - <a href="https://brightonruby.com/2018/random-thoughts-daniel-berzon/">Brighton Ruby</a></cite>
    <p>How a single line of Ruby code, the flip of a coin and some bad luck lead to an understanding of how random numbers really work, and why fairness isn’t always the best policy.</p>
    <p>
      <a href="https://brightonruby.com/2018/random-thoughts-daniel-berzon/">Watch the video <span role="img" aria-label="watch">👀</span></a>
    </p>
    
  </Layout>
);

export default TalksPage;
