
describe('findNumberAndSkip', function(){
  it('Defines findNumberAndSkip', function(){
    expect(typeof findNumberAndSkip).toBe('function');
  });
});

describe('Response type function with numbers', ()=> {
  it('Retuns only one value inside of an array if in the array of numbers there is only one match', function(){
    let arrNum = [1, 3, 10, -1, 0, 3];
    let numberContainer = [];
    expect(findNumberAndSkip(arrNum)).toEqual([3]);
  });
  it('Retuns only one value inside of an array even if in the array of numbers are more than one match', function(){
    let arrNum = [1, 3, 2, 10, -1, 0, 3, 2];
    let numberContainer = [];
    expect(findNumberAndSkip(arrNum)).toEqual([2]);
  });
  it('Retuns "undefined" if not repeated matches in the array', function(){
    let arrNum = [1, 3, 2, 10, -1, 0];
    let numberContainer = [];
    expect(findNumberAndSkip(arrNum)).toEqual(undefined);
  });
});

describe('Response type function with string', ()=> {
  it('Retuns only one value inside of an array if in the array of numbers there is only one match', function(){
    let arrStr = ["ab", "bd", "ab", "ch", "fk"];
    let numberContainer = [];
    expect(findNumberAndSkip(arrStr)).toEqual(["ab"]);
  });
  it('Retuns only one value inside of an array even if in the array of numbers are more than one match', function(){
    let arrStr = ["ab", "bd", "ab", "ch", "fk", "ch", "fk"];
    let numberContainer = [];
    expect(findNumberAndSkip(arrStr)).toEqual(["fk"]);
  });
  it('Retuns "undefined" if not repeated matches in the array', function(){
    let arrStr = ["ab", "bd", "ch", "fk"];
    let numberContainer = [];
    expect(findNumberAndSkip(arrStr)).toEqual(undefined);
  });
});

describe('Response on empty parameter', function(){
  it('Returns "undefined" if parameter is an empty array', function(){
     let arrNum = [];
    expect(findNumberAndSkip(arrNum)).toEqual(undefined);
  });
});

describe('findElementAndSkip', function(){
  it('Describes object as a function',function(){
    expect(typeof findElementAndSkip).toBe('function');
  });
});

describe('Returns', () => {
  it('Returns a type number', () => {
      let arrNum = [1, 3, 2, 10, -1, 0, 3, 2];
    expect(findElementAndSkip(arrNum)).toEqual(jasmine.any(Number));
  });
  it('Returns only one number when only one match in the array', () => {
      let arrNum = [1, 3, 2, 10, -1, 0, 2];
    expect(findElementAndSkip(arrNum)).toEqual(2);
  });
  it('Returns only one number when different matches', () => {
      let arrNum = [1, 3, 2, 10, -1, 0, 3, 2, 1, 10];
    expect(findElementAndSkip(arrNum)).toEqual(1);
  });
  it('Returns "undefined" when no matches at all', () => {
      let arrNum = [1, 3, 2, 10, -1, 0];
    expect(findElementAndSkip(arrNum)).toBe(undefined);
  });
  it('Returns "undefined" when an array of strings', () => {
      let arrStr = ["ab", "bd", "ab", "ch", "fk", "ch", "fk"];
    expect(findElementAndSkip(arrStr)).toBe(undefined);
  });
})
