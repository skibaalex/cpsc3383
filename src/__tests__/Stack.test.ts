import { Stack } from '../Stack'

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