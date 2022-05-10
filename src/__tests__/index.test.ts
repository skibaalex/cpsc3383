import { Stack } from '../Stack'
import { calculate, parseSyntax } from '../utilis';

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
        const arr = ['1','2','+', 'sin', '&']
        const parsedArr = parseSyntax(arr)
        const stack = new Stack();
        parsedArr.forEach(el => {
            stack.push(el.toString())
        })
        expect(stack.length).toEqual(4)
    })
})

describe('Calculations', () => {
    it('addition', () => {
        const addition = calculate('1', '+', '2.5');
        expect(addition).toEqual('3.5')
    })

    it('subtraction', () => {
        const subtraction = calculate('2.5', '-', '1');
        expect(subtraction).toEqual('1.5')
    })
    
    it('division', () => {
        const division = calculate('18', '/', '9');
        expect(division).toEqual('2')
    })

    it('multiplication', () => {
        const multiplication = calculate('10', '*', '9');
        expect(multiplication).toEqual('90')
    })

    it('cos', () => {
        const cos = calculate('0', 'cos');
        expect(cos).toEqual('1')
    })

    it('sin', () => {
        const sin = calculate('0', 'sin');
        expect(sin).toEqual('0')
    })

    it('tan', () => {
        const tan = calculate('0', 'tan');
        expect(tan).toEqual('0')
    })

    it('warns that the optional operator was provided when was not needed', () => {
        console.warn = jest.fn();
        calculate('2.5', '-', '1');
        expect(console.warn).not.toBeCalled()
        calculate('0', 'cos', '12');
        expect(console.warn).toBeCalled()
    })
})