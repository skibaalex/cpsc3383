export class Stack {
    stack: string[]
    constructor(){
        this.stack = []
    }

    push(el: string){
        this.stack.push(el)
    }

    pop(el: string){
        this.stack.push(el)
    }

    length(){
        return this.stack.length;
    }

    //TODO: Add isValid Check
}