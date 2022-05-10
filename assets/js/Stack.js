var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { operators } from "./Constants.js";
import { getValence, isOperator, isValue } from "./utilis.js";
var Stack = (function () {
    function Stack(stack) {
        this.stack = stack || [];
    }
    Stack.prototype.push = function (el) {
        this.stack.push(el);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Object.defineProperty(Stack.prototype, "length", {
        get: function () {
            return this.stack.length;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.isValid = function () {
        var stack = new Stack(__spreadArray([], this.stack, true));
        var stackSize = 0;
        stack.stack.forEach(function (token) {
            if (['(', ')'].includes(token))
                return;
            stackSize += 1 - getValence(token);
            if (stackSize === -1) {
                throw new Error('Invalid RPN Format');
            }
        });
        if (stackSize === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Stack.prototype.calculate = function () {
        var tokens = __spreadArray([], this.stack, true);
        var stack = [];
        while (tokens.length) {
            var token = tokens.shift();
            if (isValue(token)) {
                stack.push(token);
            }
            else if (isOperator(token)) {
                switch (getValence(token)) {
                    case 2: {
                        var a = stack.pop();
                        var b = stack.pop();
                        if (!a || !b)
                            return null;
                        stack.push(operators[token](parseFloat(a), parseFloat(b)));
                        break;
                    }
                    case 1: {
                        var a = stack.pop();
                        if (a == null)
                            return null;
                        stack.push(operators[token](parseFloat(a)));
                        break;
                    }
                }
            }
            else if (token === '(') {
                var index = tokens.findIndex(function (el) { return el === ')'; });
                var values = new Stack(tokens.splice(0, index));
                if (values.isValid()) {
                    var value = values.calculate();
                    value && stack.push(value);
                }
            }
            else if (')') {
                continue;
            }
            else {
                return null;
            }
        }
        if (stack.length !== 1)
            return null;
        return stack.pop();
    };
    return Stack;
}());
export { Stack };
;
//# sourceMappingURL=Stack.js.map