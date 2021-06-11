// Every programmer from any language will understand
function findNumberAndSkip(arrNum) {
    let numberContainer = [];
    let i = arrNum.length;
    let found = false;
    while ((i--) && found == false) {
        if (arrNum.indexOf(arrNum[i]) != i) {
            numberContainer.push(arrNum[i]);
            found = true;
        }
    }
    (numberContainer.length == 0) ? numberContainer = undefined : numberContainer;
    return numberContainer;
}
// ECMA6
const findElementAndSkip = (arr) => arr.sort((a, b) => a - b).find((el, indx, arrTwo) => arrTwo[indx] === arrTwo[indx + 1]);
