import { parseSyntax } from './utilis.js'
import { Stack } from './Stack.js'

document.getElementById('calcBtn').addEventListener('click', () => {
    const rpnInput = document.getElementById("rpn-string");
    const stack = new Stack(parseSyntax(rpnInput.value.split(' ')))
    const error = document.getElementById('error')
    const result = stack.calculate()
    if(result){
        document.getElementById('result').innerHTML = result
        error.classList.add('d-none')
    } else {
        error.classList.toggle('d-none')
        error.innerHTML = 'Wrong Input'
    }
    rpnInput.value = ''
})