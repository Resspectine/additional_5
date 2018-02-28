module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    let opening = [];
    let closing = [];
    bracketsConfig.forEach(function (el) {
        opening.push(el[0]);
        closing.push(el[1]);
    });
    let stack = [];
    let result = true;
    str.forEach(function (eval) {
        if (opening.indexOf(eval) !== -1) {
            if (closing.indexOf(eval) !== -1 && stack[stack.length - 1] === eval) {
                stack.pop();
            } else {
                stack.push(eval);
            }
        } else {
            if (stack.pop() === opening[closing.indexOf(eval)]) {
            } else {
                result = false;
            }
        }
    });
    if (stack.length) {
        result = false;
    }
    return result;
};
