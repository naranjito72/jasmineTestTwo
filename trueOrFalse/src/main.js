function thereAreDuplicates(arrNum) {
    let matches;
    (!Array.isArray(arrNum)) ? arrNum = Object.values(arrNum) : arrNum;
    let mySet = [...new Set(arrNum)];
    if (mySet.length == 0 || arrNum.length == 0)
        return undefined;
    (mySet.length !== arrNum.length) ? matches = true : matches = false;
    return matches;
}
