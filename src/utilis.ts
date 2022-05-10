import {Operation} from '../types';
import { operators } from './Constants';


/**
 * Takes array of values and return the valid values that can exist in a RPN expression.
 * @param elements Array of numbers, operations and parentheses.
 * @returns syntactically validated array of numbers, operations and parentheses.
 */
export const parseSyntax = (elements: (string|Operation)[]): (string|Operation)[] => {
    //TODO: understand why when imported the regex fails.
    const test = elements.filter(el => {
        return /\+|\-|\/|\*|sin|cos|tan|\(|\)|(\d+(?:\.\d+)?)/g.test(el.toString())
    })
    return test
}


/**
 * Preform a given mathematical operation and returns its value.
 * @param {string} value1 number as a string
 * @param {string} operation operator e.g cos
 * @param {string} [value2] (optional) number as a string
 * @returns {string} the result of the operation
 */
export const calculate = (value1: string, operation: Operation, value2?: string): string => {
    // .toFixed(2) to return only two decimal points
    const value2Warning = (): void => {
        if(value2){
            console.warn(`Operant 2 was not necessary to preform the ${operation} operation`)
        }
    }
    switch(operation){
        case '+':
            return (+(Number(value1) + Number(value2)).toFixed(2)).toString();
        case '-':
            return (+(Number(value1) - Number(value2)).toFixed(2)).toString();
        case '/':
            return (+(Number(value1) / Number(value2)).toFixed(2)).toString();
        case '*':
            return (+(Number(value1) * Number(value2)).toFixed(2)).toString();
        case 'cos':
            value2Warning()
            // + to remove any tailing 0s e.g 1.50
            return (+(Math.cos(Number(value1))).toFixed(2)).toString();
        case 'sin':
            value2Warning()
            return (+(Math.sin(Number(value1))).toFixed(2)).toString();
        case 'tan':
            value2Warning()
            return (+(Math.tan(Number(value1))).toFixed(2)).toString();
        default:
            throw new Error('Unfamiliar operation was provided')
    }
}

export const getValence = (operation: Operation): number => {
    // .toFixed(2) to return only two decimal points
    switch(operation){
        case '+':
            return 2;
        case '-':
            return 2;
        case '/':
            return 2;
        case '*':
            return 2;
        case 'cos':
            // + to remove any tailing 0s e.g 1.50
            return 1;
        case 'sin':
            return 1;
        case 'tan':
            return 1;
        default:
            if(!isNaN(Number(operation)))
            return 0;
            throw new Error('Wrong input');
    }
}

export const isOperator = (token: string) => {
    return token in operators
  }
  
export const isValue = (token: string) => {
    return  ! isNaN ( parseFloat ( token ) )  &&  isFinite ( Number(token) )
  }