// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов.
// Функция принимает на вход размерность поля и возвращает массив массивов нужного размера,
// заполненный значениями null.

// const field1 = getField(1);
// console.log(field1);
// // [[null]]

// const field2 = getField(2);
// console.log(field2);
// // [[null, null], [null, null]]

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

type InnerArray = null[];
type Field = InnerArray[];

function getFieldMySolution(fieldSize: number): Field {
    let innerArray: InnerArray = new Array(fieldSize).fill(null);
    let fieldArray: Field = new Array(fieldSize).fill(innerArray);
    return fieldArray;
}

console.log(getFieldMySolution(1)); // [[null]]
console.log(getFieldMySolution(3)); // [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ]

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

function getFieldTeacheSolution(size: number): null[][] {
    const row = Array<null>(size).fill(null);
    return Array<null[]>(size).fill(row);
}

console.log(getFieldTeacheSolution(1)); // [[null]]
console.log(getFieldTeacheSolution(3)); // [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ]
