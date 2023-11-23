// Problem 1:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously

// Ensure that the function is invoked as follows:
//     fsProblem1(absolutePathOfRandomDirectory, randomNumberOfFiles)


const {fsProblem1} = require('../fs-problem1.cjs')

const absolutePathOfRandomDirectory = "./myFolder";
const randomNumberOfFiles = Math.round(Math.random() * 10) + 1;
console.log(randomNumberOfFiles);

fsProblem1(absolutePathOfRandomDirectory, randomNumberOfFiles);

