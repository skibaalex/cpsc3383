
//TODO: understand why when imported the regex fails.
export const parseSyntax = (elements: (string|number)[]) => {
    const test = elements.filter(el => {
        return /\+|\-|\/|\*|sin|cos|tan|\(|\)|(\d+(?:\.\d+)?)/g.test(el.toString())
    })

    return test
}
