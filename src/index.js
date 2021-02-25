module.exports = function check(str, bracketsConfig) {
let arr = str.split('')


    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
        for (let j = 0; j < bracketsConfig.length; j++) {


            if (stack[stack.length - 2] === bracketsConfig[j][0] && stack[stack.length - 1] === bracketsConfig[j][1]) {
                stack.pop()
                stack.pop()
            }

        }

    }

    if (stack.length !== 0) {
        return false
    } else {
        return true
    }
}
