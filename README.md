# CPSC3383 Assignment 1.1

This is the final Assignment for class CPSC3383 Spring Semester

## Motivation

The goal of this project is to create a calculator that will preform calculations in "Reverse Polish Notation",
This is to demonstrate my ability design, implement and evaluate a computing-based solution to meet a given set of computing requirements

## Description
In the assignment's instruction it states 

```
The program should make use of standard tools for creating/handling syntax
analysis and parsing such as lex(1)3
and yacc(1)4
```
Since this project is implemented in [TypeScript](#References), [Regex](#References) in combination with a [`Stack` data structure](#References) will be used to handle and parse the syntax of the calculations. 
The assignment requires testing, Unit tests will be implemented using [Jest Testing Library](#References).
* Although not required this project will be developed in a [TTD](#References) approach to improve my skills in the process.
* The project will be managed in a kanban board on the github website.
* At the end the project will be compiled into JS and served over the web using [gh-pages](#References).

## Discussion

**Table of contents**
* [Syntax Parsing](#syntax-parsing)

#### Syntax Parsing
The expected values to be received are any number in a string format.
In addition there are 7 different mathematical operations that are allowed `+, -, /, *, sin, con, tan`, and expression grouping using `(, )`.

Some use cases to take into consideration are
* Trigonometric operations only take **one** parameter as an input while regular operations take **two**
* Any open parentheses has to have a corresponding closing parentheses.
* inside each parentheses has to accrue a valid operation.
* does the expression has to start with a parentheses? 

In order to parse the syntax all the strings will be tested against a regular expression and then stored into a stack, which is there will be test for validity.


## References
1) [TypeScript](https://en.wikipedia.org/wiki/TypeScript) - TypeScript a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
2) [Regex](https://en.wikipedia.org/wiki/Regular_expression) - Regular Expression
3) [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - "First in last out" data type
4) [Jest](https://www.npmjs.com/package/jest) - Standard JS testing library
5) [TTD](https://en.wikipedia.org/wiki/Test-driven_development) - Test Driven Development
6) [gh-pages](https://en.wikipedia.org/wiki/GitHub#GitHub_Pages) - Static web hosting service offered by [GitHub](https://github.com) 