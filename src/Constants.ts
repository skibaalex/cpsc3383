import { Operation } from "../types"

//TODO: Fix one digit number fails
export const EQUATION_REGEX = /\+|\-|\/|\*|sin|cos|tan|\(|\)|(\d+(?:\.\d+)?)/g

export const operators = {
    '+': (a: number, b: number) =>  { return b + a },
    '-': (a: number, b: number) =>  { return b - a },
    '*': (a: number, b: number) =>  { return b * a },
    '/': (a: number, b: number) =>  { return b / a },
    'cos': (a: number) =>  { return Math.cos(a) },
    'sin': (a: number) =>  { return Math.sin(a) },
    'tan': (a: number) =>  { return Math.tan(a) },
  }