// find all matches inside Array

function findAllDuplicates(arrElements: any[]): any[] {
  (!Array.isArray(arrElements)) ? arrElements = Object.values(arrElements) : arrElements;
  let uniqueElements: any = new Set(arrElements);
  let filteredElements: any[] = arrElements.filter((item) => {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
    } else {
      uniqueElements.add(item);
    }
  });
  if (uniqueElements.size == 0) {
    return undefined;
  } else {
    return [...new Set(uniqueElements)];
  }
}
