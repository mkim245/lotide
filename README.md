# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mkim245/lotide`

**Require it:**

`const _ = require('@mkim245/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: it asserts if two arrays match
* `assertEqual`: it asserts if two values match
* `assertObjectsEqual`: it asserts if two objects match
* `countLetters`: it returns counts of each letter of a string
* `countOnly`: it takes an array and an object and return an object containing counts of everything that the input object listed
* `eqArrays`: it takes in two arrays and returns true or false, based on a perfect match
* `eqObjects`: it takes in two objects and returns true or false, based on a perfect match
* `findKey`: it scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue`: it scans the object and return the first key which contains the given value
* `head`: it returns the first item in the array
* `index`: list of all the functions in an object
* `letterPositions`: it returns all the indices in the string where each character is found
* `map`: it returns a new array based on the results of the callback function
* `middle`: it returns the middle-most element(s) of the given array
* `tail`: it returns the "tail" of an array: everything except for the first item (head) of the provided array
* `takeUntil`: it returns a slice of the array with elements taken from the beginning
* `without`: it returns a subset of a given array, removing unwanted elements
