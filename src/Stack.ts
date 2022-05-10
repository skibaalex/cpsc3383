import { Operation } from "../types";
import { getValence } from "./utilis";

export class Stack {
    stack: Array<Operation | string>;
    constructor(stack?: Array<Operation | string>){
        this.stack = stack || [];
    }

    push(el: string): void{
        this.stack.push(el);
    }

    pop(): string | undefined{
        return this.stack.pop();
    }

    get length(): number{
        return this.stack.length;
    }

    isValid(): boolean {
        const stack = new Stack([...this.stack])
        let stackSize = 0
        stack.stack.forEach(token => {
            // Take care of parentheses
            if(['(', ')'].includes(token))
            return
            //TODO: type system error
            stackSize += 1 - getValence(token)
            if(stackSize === -1){
                throw new Error('Invalid RPN Format')
            }
        })
        if(stackSize === 1 ){
            return true
        } else {
            return false
        }
    }
}