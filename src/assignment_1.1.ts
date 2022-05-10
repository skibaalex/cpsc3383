import { Stack } from "./Stack";
import { parseSyntax } from "./utilis";

const stack = new Stack();

// parseSyntax(['1', '(', '2', '2', '-', ')', '+']).forEach((item) => stack.push(item))
parseSyntax(['(', '1', '2', '+', ')', '2', '*']).forEach((item) => stack.push(item))
