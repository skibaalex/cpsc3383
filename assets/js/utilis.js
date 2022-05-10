import { operators } from './Constants.js';

export var parseSyntax = function (elements) {
    var test = elements.filter(function (el) {
        return /\+|\-|\/|\*|sin|cos|tan|\(|\)|(\d+(?:\.\d+)?)/g.test(el.toString());
    });
    return test;
};
export var calculate = function (value1, operation, value2) {
    var value2Warning = function () {
        if (value2) {
            console.warn("Operant 2 was not necessary to preform the ".concat(operation, " operation"));
        }
    };
    switch (operation) {
        case '+':
            return (+(Number(value1) + Number(value2)).toFixed(2)).toString();
        case '-':
            return (+(Number(value1) - Number(value2)).toFixed(2)).toString();
        case '/':
            return (+(Number(value1) / Number(value2)).toFixed(2)).toString();
        case '*':
            return (+(Number(value1) * Number(value2)).toFixed(2)).toString();
        case 'cos':
            value2Warning();
            return (+(Math.cos(Number(value1))).toFixed(2)).toString();
        case 'sin':
            value2Warning();
            return (+(Math.sin(Number(value1))).toFixed(2)).toString();
        case 'tan':
            value2Warning();
            return (+(Math.tan(Number(value1))).toFixed(2)).toString();
        default:
            throw new Error('Unfamiliar operation was provided');
    }
};
export var getValence = function (operation) {
    switch (operation) {
        case '+':
            return 2;
        case '-':
            return 2;
        case '/':
            return 2;
        case '*':
            return 2;
        case 'cos':
            return 1;
        case 'sin':
            return 1;
        case 'tan':
            return 1;
        default:
            if (!isNaN(Number(operation)))
                return 0;
            throw new Error('Wrong input');
    }
};
export var isOperator = function (token) {
    return token in operators;
};
export var isValue = function (token) {
    return !isNaN(parseFloat(token)) && isFinite(Number(token));
};
//# sourceMappingURL=utilis.js.map