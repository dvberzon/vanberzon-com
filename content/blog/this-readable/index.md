---
title: How Readable? "This" Readable!
date: "2019-12-13"
description: The results are in for the code readability experiment on howreadable.com
---
In October 2019 we went live with the second version of our code readability experiment on [howreadable.com](https://howreadable.com). Since the experiment closed in November, I've been crunching the numbers - with the help of the inimitable Oskar Holm ([@ohdatascience](https://twitter.com/ohdatascience)) - and the results are in!

We can finally, somewhat, answer the question "How readable?".

We had 545 participating developers, each of whom looked at an average of 13 JavaScript code snippets. We measured the time they took to read each snippet, and whether they could predict the output of the code.

By comparing the results for pairs of snippets that differed in their use of various coding constructs, we were able to get statistically significant results that point to an objective measure for the readability of the constructs themselves. Our headline findings were as follows:

- **Operator precedence**: In expressions that are dependent on operator precedence, adding brackets increases both reading speed and accuracy.
- **Chaining methods**: Chained methods are faster to read, but adding intermediate variables leads to greater accuracy.
- **Order of if statements**: If statements are faster to read when the positive case is presented first.
- **Extracting functions**: There is a reading speed overhead when extracting functions.
- **Pure functions**: There is a reading speed overhead when writing pure functions.
- **Boolean algebra**: Expanded boolean expressions are faster to read than simplified ones.

The full write up of the experiment is now available on [howreadable.com](https://howreadable.com), and I presented the findings in Nov 2019 the [HalfStack](https://halfstackconf.com/london/) conference London, and at the [Asyncjs](https://asyncjs.com/designing-network-sympathetic-applications/) meetup in Brighton.

This has been a very rewarding but exhausting experience. I'd like to thank everyone who participated in the experiment and especially those who gave their time to help put it [together](/readability). I don't know what the future holds for this project, but I'm very proud of the progress we have made so far.

A will post soon in more detail about the experience. In the meantime, have a safe and prosperous holiday season and new year!