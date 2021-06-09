// using set to determinate if there is/are any matching elements
function thereAreDuplicates(arrNum) {
    let matches;
    let mySet = [...new Set(arrNum)];
    if (mySet.length == 0 || arrNum.length == 0)
        return undefined;
    (mySet.length !== arrNum.length) ? matches = true : matches = false;
    return matches;
}
