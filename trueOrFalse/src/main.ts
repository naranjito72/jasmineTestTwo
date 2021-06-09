// using set to determinate if there is/are any matching elements

function thereAreDuplicates(arrNum: number[]): boolean {
  let matches: boolean;
  (!Array.isArray(arrNum)) ? arrNum = Object.values(arrNum) : arrNum;
  let mySet: any = [...new Set(arrNum)];
  if (mySet.length == 0 || arrNum.length == 0) return undefined;
  (mySet.length !== arrNum.length) ? matches = true : matches = false;
  return matches;
}
