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

Get all non unique values @[**Stack Overflow**](https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array?page=1&tab=votes)

How to convert Objects into Arrays by [*Samantha Ming*](https://www.samanthaming.com/tidbits/76-converting-object-to-array/) and by [*javascripttutorial.net*](https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/#:~:text=To%20convert%20an%20object%20to%20an%20array%20you%20use%20one,entries()%20.)

Running multiple tests cases by [*Harvey Delaney*](https://blog.harveydelaney.com/running-multiple-test-cases-in-jasmine/)

Check objects in [**Jasmine**](https://jasmine.github.io/2.2/introduction.html#section-Partial_Matching_with_<code>jasmine.objectContaining</code>) unit test
