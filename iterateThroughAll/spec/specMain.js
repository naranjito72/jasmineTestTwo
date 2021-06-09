
describe('findAllDuplicates', function(){
  it('Defines findAllDuplicates', function(){
    expect(typeof findAllDuplicates).toBe('function');
  });
});

describe('Response type function with numbers', function(){
  const arrParameters = [
    {case: findAllDuplicates([1, 2, 3, 3]), answer: [3]},
    {case: findAllDuplicates([5, 6, 7, 8, 6, 5]), answer: [6, 5]},
    {case: findAllDuplicates([9, 10, 11, 12]), answer: undefined}
  ]
  arrParameters.forEach((item, i) => {
    it(`Should return an array of numbers when repeated matches and "undefined" if there are no matches array number: ${i + 1} return ${item.answer} `, function(){
      expect(item.case).toEqual(item.answer)
    });
  });
});

describe('Response type function with strings', function(){
  const arrParameters = [
    {case: findAllDuplicates(["ab", "bd", "ab", "ch", "fk"]), answer: ["ab"]},
    {case: findAllDuplicates(["ab", "bd", "ab", "ch", "fk", "ch", "fk"]), answer: ["ab", "ch", "fk"]},
    {case: findAllDuplicates(["ab", "bd", "ch", "fk"]), answer: undefined}
  ]
  arrParameters.forEach((item, i) => {
    it(`Should return an array of strings when repeated matches, one string if only one repeated and "undefined" if there are no matches array number: ${i + 1} return ${item.answer} `, function(){
      expect(item.case).toEqual(item.answer)
    });
  });
});

describe('Response on empty parameter', function(){
  it('Returns "undefined" if parameter is an empty array', function(){
     let arrNum = [];
    expect(findAllDuplicates(arrNum)).toEqual(undefined);
  });
});

describe('Check if it is a proper object using jasmine.any', function(){
  var objectTwo = {};
  beforeEach(function(){
    objectTwo = {
      a: "ab",
      b: "bc",
      c: "cd",
      d: "de",
      e: "ab"
    }
  });
  it('Checks if it is an Object', function(){
    expect((objectTwo)).toEqual(jasmine.any(Object));
  });
  it('Returns an array if object is a parameter', function(){
    expect(findAllDuplicates(objectTwo)).toEqual(["ab"]);
  });
});

describe('Diferents outputs whit object', function(){
  it('Should return a diferent types of data with the typpe of object data', function() {
    var objectTwo = {
      a: "ab",
      b: "bc",
      c: "cd",
      d: "de",
      e: "ab"
    }
    var objectOne = {
      1: 1,
      2: 5,
      3: 3,
      4: 1,
      5: 7
    }
    var objectThree = {}
    expect(findAllDuplicates(objectTwo)).toEqual(["ab"]);
    expect(findAllDuplicates(objectOne)).toEqual([1]);
    expect(findAllDuplicates(objectThree)).toEqual(undefined);
  })
})
