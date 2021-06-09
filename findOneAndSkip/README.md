# Find only one

A function developed to find only one repeated match inside an array and stop the iteration. Tested with primitive data types [**numbers**] and [**string**]

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

Function based in one of my exercises in Barcelona Activa. GitHub [**repository**](https://github.com/bcnActivaRepositorio/pooHotel/blob/master/js/main.ts). Check lines from 60 to 72 *(nuriaCheck Function)*
