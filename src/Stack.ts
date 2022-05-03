export class Stack {
    stack: string[];
    constructor(){
        this.stack = [];
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

    //TODO: Add isValid Check
}