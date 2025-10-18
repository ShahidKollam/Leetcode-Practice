/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // s = s.split("")
    // if (s.length % 2 !== 0) return false

    let stack = []
    for (i = 0; i < s.length; i++) {
        if (s[i] === '{') { stack.push('}') }
        else if (s[i] === '[') { stack.push(']') }
        else if (s[i] === '(') { stack.push(')') }
        else if(stack.pop() !== s[i]) {
            return false
        }
    }
    return stack.length === 0
};