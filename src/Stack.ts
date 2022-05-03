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

    //TODO: Add isValid Check
}