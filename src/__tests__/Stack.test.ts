import { Stack } from '../Stack'
import { parseSyntax } from '../utilis';

describe('Stack Class login', () => {
    const stack = new Stack();

    it('adds element to the stack', () => {
        stack.push('1');
        const {length} = stack;
        expect(length).toEqual(1)
    })
    it('removes element from the stack', () => {
        stack.push('2');
        stack.push('3');
        stack.pop();
        const {length} = stack;
        expect(length).toEqual(2)
    })
})

describe('Syntax Parsing', () => {
    it('parses valid characters', () => {
        const arr = [1,2,'+', 'sin', '&']
        const parsedArr = parseSyntax(arr)
        const stack = new Stack();
        parsedArr.forEach(el => {
            stack.push(el.toString())
        })
        expect(stack.length).toEqual(4)
    })
})