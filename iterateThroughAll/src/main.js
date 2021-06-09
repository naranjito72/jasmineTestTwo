// find all matches inside Array
function findAllDuplicates(arrElements) {
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
