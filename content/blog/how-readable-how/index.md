---
title: The “How” of howreadable
date: "2019-07-05"
description: A rundown of the thinking behind howreadable.com, my online experiment to measure code readability. How the experiment works and what I hope to measure with it.
---

In my previous [post][1], I introduced my code readability experiment at [howreadable.com][2]. I explained how my interest in linguistics, and specifically the difference between prescriptive and descriptive grammar rules, inspired me to try and uncover descriptive rules for how to write readable code. I set up the *howreadable* experiment as an attempt to discover the coding patterns that developers will instinctively follow to make their source code more readable. But how exactly does the experiment intend to achieve this? What is the "how" of *howreadable*

In this post, I will explain the thinking behind the experiment, the methodology of its first iteration, and how I intend to tweak the methodology to improve the results going forward.

## How readable?

The aim of the experiment is to discover rules for improving readability that developers instinctively follow when writing code. To do this, we need to have a way of objectively measuring the readability of a snippet of code.

Code readability is typically measured based on the subjective opinion of the developer. A developer will rate the readability of a snippet of code by evaluating their own experience reading it. This is the simplest way to evaluate code, but subjective opinion is not the most reliable metric. Just as people are often not consciously aware of the grammar rules they follow in their speech, developers may not be able to accurately assess their own ability to read and understand code. It would be better if we could measure readability directly.

The **howreadable** experiment takes a different approach. It attempts to measure the readability of a snippet of code by presenting it to a developer and directly observing the developer's behaviour while reading it. For the purposes of the experiment, we think of code readability as measuring how rapidly a developer can understand what a snippet of code does on seeing it for the first time. The faster the developer can understand the code, the more readable it is.

Based on this definition, the experiment involves two objective measurements.

1. Can a developer correctly predict the result of executing a code snippet?
2. How long does the developer take reading the code before making that prediction?

The first metric tests the developers understanding of the code. The second measures the ease with which they gained that understanding.

## How to

In the first iteration of the experiment, we measured the readability of a number of code snippets as follows:

- A developer agrees to participate in the experiment and a responds to a few questions about themselves about their coding experience and the language they typically work in.
- They are then shown a snippet of code and a timer is started.
- They are asked to read the code and then answer a question about it, specifically what the value of a variable will be after executing the code.
- When the developer feels they are ready to answer, the timer is stopped and they are presented with multiple choice options for the result of the variable.
- The developer submits their answer, and the process is repeated for the next code snippet.

The snippets presented to the developer each follow a specific coding pattern with the aim of determining whether that pattern affects readability. In each case, the developer is either presented with a snippet that follows the pattern, or a *control* snippet that does not.

As an example, one of the experiments is designed to measure the readability of **ternary operators**. A ternary operator is a conditional expression that looks like this (in javascript).

```js
var result = condition ? 'yes' : 'no';
```

If the condition is true, the variable `result` will be assigned to the string value `'yes'`, or the string value `'no'` if it is false.

This syntax is a terse way of expressing a conditional assignement. The equivalent (long hand) way of writing this code would be with an `if` statement.

```js
var result;

if (condition) {
  result = 'yes';
} else {
  result = 'no';
}
```

The ternary operator, if a developer is familiar with it, is a convenient and terse way to write a conditional assignment. But is it more readable than the traditional if statement?

To test the readability of a ternary operator as part of our experiment, a developer would be shown one of two code snippets. The snippets would be identical except that in one case the conditional assignment would be achieved through a ternary operator and the other an if statement. They would then be asked a question about the code, for example "What value will the variable `result` have?". In both snippets the answer would be the same.

There were a total of nine experiments, each testing a different coding pattern. In each experiment the developer was shown either the snippet with the pattern or the *control* snippet, determined at random. To keep the numbers of results for each snippet even, we used a system of block randomisation, which I explained in my "[random thoughts](https://brightonruby.com/2018/random-thoughts-daniel-berzon/)" talk.

## How it went

The patterns tested in the first iteration of the experiment were as follows:

- Ternary operators
- Nested ternary operators
- Code comments
- Function naming
- Extracting inline processes into functions 
- Early return
- Array reducers
- Switch statements

For each participant we captured the time taken looking at the code and whether their response to the question was correct. Then, for each pattern we averaged the values for all the participants that saw the snippet with the pattern, and compared these to the average values for the control snippets. We were hoping to see a significant difference between the two snippets in the average time taken and percentage of correct answers. The snippet with the lower time taken and the higher percentage of correct answers, would be considered the more readable.

We had a total of 247 participants take part in the experiment, of whom nearly half had been in software development for over 10 years. This meant that in most cases for each snippet we had approximately 120 results. The percentages of correct answers were typically around 90 - 95%. In terms of the time taken reading the code, the values typically resembled a normal distribution, but with a long tail of values in the higher times. The graph below show's the results for the ternary operator test.

![Ternary Operator Results](./graph.png)



## How Readable 2.0



[1]:	/readable-code-prescription
[2]:	http://howreadable.com