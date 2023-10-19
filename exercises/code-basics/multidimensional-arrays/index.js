"use strict";
// <<<<<<<<<<<< Задание >>>>>>>>>>>>
function getFieldMySolution(fieldSize) {
    let innerArray = new Array(fieldSize).fill(null);
    let fieldArray = new Array(fieldSize).fill(innerArray);
    return fieldArray;
}
console.log(getFieldMySolution(1)); // [[null]]
console.log(getFieldMySolution(3)); // [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ]
// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>
function getFieldTeacheSolution(size) {
    const row = Array(size).fill(null);
    return Array(size).fill(row);
}
console.log(getFieldTeacheSolution(1)); // [[null]]
console.log(getFieldTeacheSolution(3)); // [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ]
