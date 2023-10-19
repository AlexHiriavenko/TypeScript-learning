// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Создайте и экспортируйте тип Point, 
// который описывает точку в пространстве, состоящую из трех координат: x, y, z.

// Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение. 
// Две точки совпадают, если совпадают все их координаты:

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

// isTheSamePoint(p1, p2); // true
// isTheSamePoint(p1, p3); // false
// isTheSamePoint(p2, p3); // false

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>


export type Point = [number, number, number];

function isTheSamePoint(p1:Point, p2: Point):boolean {
    return p1.every((el, i) => el === p2[i])
}

console.log(isTheSamePoint(p1, p2)); // true
console.log(isTheSamePoint(p1, p3)); // false
console.log(isTheSamePoint(p2, p3)); // false

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

// THE SAME