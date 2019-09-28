module.exports = function check(str, bracketsConfig) {
    let result = true;
    const configObj = new Map(bracketsConfig);
    const strArr = str.split('');
    const bracketsStack = [];
    for (let i = 0; i < strArr.length; i++) {
        if (configObj.has(strArr[i]) && configObj.get(bracketsStack[bracketsStack.length - 1]) !== strArr[i]) bracketsStack.push(strArr[i])
        else {
            if (!(bracketsStack.length)) {
                result = false;
                break;
            }
            const lastBracket = bracketsStack.pop();
            if (!(configObj.get(lastBracket) === strArr[i])) {
                result = false;
                break;
            }
        }
    }

    result = result && !bracketsStack.length;

    return result;
}
