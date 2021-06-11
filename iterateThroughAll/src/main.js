// Classical programming
function findAllDuplicates(arrElements) {
    (!Array.isArray(arrElements)) ? arrElements = Object.values(arrElements) : arrElements;
    let uniqueElements = new Set(arrElements);
    let filteredElements = arrElements.filter((item) => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        }
        else {
            uniqueElements.add(item);
        }
    });
    if (uniqueElements.size == 0) {
        return undefined;
    }
    else {
        return [...new Set(uniqueElements)];
    }
}
// ECMA6
const findAllElements = (arr) => [...new Set(arr)].filter((value) => arr.indexOf(value) !== arr.lastIndexOf(value)).sort();
