# Find them all

Function created to find ALL the matches inside an array. Uses the original array and a [SET](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to compare both data. SET works allowing only non repeated data into its boundaries. And so the function takes a deal in it. If the data matches in both places, is deleted from the SET, if there is no match, is added to the SET.

#### Arrays used to test the function

```
const randomNumbers = (length, max) =>  [...new Array(length)].map(() => Math.round(Math.random() * max));
randomNumbers(100, 25);

```
A function that generates a random array of numbers.

### Jasmine tests

###### Jasmine unit

  * jasmine stand alone 3.7.1 form GitHub [**repository**](https://github.com/jasmine/jasmine/releases)

  * Installed and customized to the needs of the function
  ###### Features checked

    * Function is a Function

    * Type of return: [*number*], [*string*] or [*undefined*]

    * Only returns one number despite if there are many matches or only one match

    * Empty parameter response function: [*undefined*]

### Documentation

Credit to Stack Overflow [answer](https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array?page=1&tab=votes#tab-top)
