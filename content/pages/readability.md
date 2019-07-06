---
title: Code Readability Research
---

In 2018 Daniel started an online experiment at [howreadable.com](http://howreadable.com/). The aim of the experiment was to try to uncover rules for how programming patterns affect code readability, based on empirical observation of developer behaviour.

Code readability is vital to productivity in software development, but there is little literature on the subject and almost no academic research. A developer reading up on how to improve the readability of their code will be presented with advice that is almost exclusively based on subjective personal opinion. There has been academic [research](https://www.researchgate.net/publication/260648747_Learning_a_Metric_for_Code_Readability) on the subject, but even that is based on subjective assessments of the readability of code by developers themselves. What is lacking is an objective metric for readability based on empirical observation.

The inspiration for this experiment came from the world of linguistics, where the traditional view of grammar as a set of prescriptive rules was replaced by a search for descriptive grammar rules based on observation. This [post](/readable-code-prescription) goes into further detail.

In the experiment, participant developers are presented with code snippets and asked to predict the result of executing the code. We measure their success at predicting the code, and the time they take to read it. Using these two metrics, the experiment compares the readability of different coding patterns with the aim of determining descriptive rules. An example would whether code comments help readability.

The first version of the experiment went live in 2018. Daniel presented his initial findings on Dec 6th 2018 at the [Async meetup]("https://asyncjs.com/readable-code/") in Brighton. You can watch my talk [here](https://www.youtube.com/watch?v=dlczTNFHpww) and the slides are available [here](https://speakerdeck.com/dvberzon/useable-grammatical-and-readable-code). A second version of the experiment, with improved methodology, will go live in the autumn of 2019.

