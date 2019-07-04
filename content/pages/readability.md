---
title: Code Readability Research
---

In 2018 Daniel started an online experiment at [howreadable.com](http://howreadable.com/). The aim of the experiment was to try to uncover rules for how programming patterns affect code readability, based on empirical observation of developer behaviour.

Code readability is vital to productivity in software development, but there is little literature on the subject and almost no academic research. A developer reading up on how to improve the readability of their code will be presented with advice that is almost exclusively based on subjective personal opinion. There has been academic [research](https://www.researchgate.net/publication/260648747_Learning_a_Metric_for_Code_Readability) on the subject, but even that is based on subjective assessments of the readability of code by developers themselves. What is lacking is an objective metric for readability based on empirical observation.

The inspiration for this experiment came from the world of linguistics, where the traditional view of grammar as a set of prescriptive rules was replaced by a search for descriptive grammar rules based on observation. This [post](/readable-code-prescription) goes into further detail.

# Methodology

The **howreadable** experiment attempts to measure the readability of a snippet of code by presenting it to a developer and observing the developer's behaviour while reading it. For the purposes of the experiment we think of code readability as a measure of how easily a developer can come to an understanding of what a snippet of code does by reading it. The faster the developer can understand the code, the more readable it is.

Based on this definition, the experiment involves two objective measurements.

1. Can a developer correctly predict the result of executing a code snippet?
2. How long does the developer take reading the code before making that prediction?

The first metric tests the developers understanding of the code. The second measures the ease with which they gained that understanding.

In the experiment a participant developer is presented with a code snippet and a timer is started. They are asked to read the code and then answer a question about it, specifically what the value of a variable will be after executing the code. When they feel ready to answer the timer is stopped and they are presented with multiple choice answers for the result of the variable. This process is repeated for multiple code snippets.

# Coding patterns

The snippets presented to the developer will each follow a specific coding pattern with the aim of determining whether that pattern affects readability. In each case the developer is presented with a snippet the follows that pattern, or a control snippet that does not.

As an example, one of the experiments is designed to measure the readability of **ternary operators**. A ternary operator is a conditional expression that looks like this (in javascript).

```
var result = condition ? 'yes' : 'no';
```

If the condition is true, the variable `result` will be assigned to the string value `'yes'`, or the string value `'no'` if it is false.

This syntax is a terse way of expressing a conditional assignement. The equivalent (long hand) way of writing this code would be with an if statement, as follows.

```
var result;

if (condition) {
  result = 'yes';
} else {
  result = 'no';
}
```

The ternary operator, if a developer is familiar with it, is a convenient and terse way to write a conditional assignment. But is it more readable than the traditional if statement.

To test the readability of a ternary operator as part of our experiment, a developer would be shown one of two code snippets. The snippets would be identical except that it one case the conditional assignment would be achieved through a ternary operator and the other an if statement.

