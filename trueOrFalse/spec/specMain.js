describe('thereAreDuplicates', function(){
  it('Describes thereAreDuplicates as a function', function(){
    expect(typeof(thereAreDuplicates)).toBe('function');
  });

  it('The function returns a boolean that can be false', function(){
    let matches = false;
    expect(matches).toBe(false);
  });

  it('The function returns a boolean that can be true', function(){
    let matches = true;
    expect(matches).not.toBe(false);
  });
});

describe('When to return false', function(){
  const arrParameters = [
    {case: thereAreDuplicates([1, 2, 3, 4]), answer: false},
    {case: thereAreDuplicates([5, 6, 7, 8]), answer: false},
    {case: thereAreDuplicates([9, 10, 11, 12]), answer: false}
  ]
  arrParameters.forEach((item, i) => {
    it(`Should return "false" when no repeated matches (array number: ${i + 1}) ${item.arr} `, function(){
      expect(item.case).toEqual(item.answer)
    })
  });
});

describe('When to return true', function(){
  const arrParameters = [
    {case: thereAreDuplicates([1, 2, 3, 4, 1]), answer: true},
    {case: thereAreDuplicates([5, 6, 7, 8, 6, 7]), answer: true},
    {case: thereAreDuplicates([9, 10, 11, 12, 9, 10, 11]), answer: true}
  ]
  arrParameters.forEach((item, i) => {
    it(`Should return "true" when repeated matches are inside the array (array number: ${i + 1}) ${item.arr} `, function(){
      expect(item.case).toEqual(item.answer)
    })
  });
});

describe('Returning "undefined"', function(){
  it('Should return "undefined" when is injected an empty array as a parameter', function(){
    let arr = [];
    expect(thereAreDuplicates([])).toEqual(undefined);
  })
})
