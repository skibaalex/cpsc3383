import { Operation } from "../types";
import { operators } from "./Constants";
import { getValence, isOperator, isValue } from "./utilis";

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
            //@ts-ignore
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

    calculate() {
        const tokens = [...this.stack]
        const stack: string[] = []

        while (tokens.length) {
          const token = tokens.shift()
          if (isValue(token!)) {
            stack.push(token!)
          } else if (isOperator(token!)) {

              switch(getValence(token as Operation)){
                case 2: {
                    const a = stack.pop()
                    const  b = stack.pop()

                    if (!a || !b)
                        return null // Corrupted notation, wrong token order
                        //@ts-ignore
                        stack.push(operators[token as Operation](parseFloat(a), parseFloat(b)))
                        break;
                    }
                    case 1: {
                        const a = stack.pop()
                        if (a == null)
                        return null // Corrupted notation, wrong token order
                    //@ts-ignore
                    stack.push(operators[token as 'sin' | 'cos' | 'tan'](parseFloat(a)))
                    break;
                }
              }

          } else if(token === '('){
              const index = tokens.findIndex(el => el === ')')
              const values = new Stack(tokens.splice(0, index))
              if(values.isValid()){
                  const value = values.calculate()
                  value && stack.push(value)
              }

          } else if(')') {

            continue;
            
          } else {

            return null // Unsupported token

          }
        }
      
        if (stack.length !== 1)
          return null // Invalid stack length
      
        return stack.pop()
      }
    };