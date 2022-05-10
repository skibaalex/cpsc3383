export var EQUATION_REGEX = /\+|\-|\/|\*|sin|cos|tan|\(|\)|(\d+(?:\.\d+)?)/g;
export var operators = {
    '+': function (a, b) { return b + a; },
    '-': function (a, b) { return b - a; },
    '*': function (a, b) { return b * a; },
    '/': function (a, b) { return b / a; },
    'cos': function (a) { return Math.cos(a); },
    'sin': function (a) { return Math.sin(a); },
    'tan': function (a) { return Math.tan(a); },
};
//# sourceMappingURL=Constants.js.map