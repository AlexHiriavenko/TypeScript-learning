"use strict";
// <<<<<<<<<<<< Задание >>>>>>>>>>>>
Object.defineProperty(exports, "__esModule", { value: true });
// Создайте и экспортируйте тип Point,
// который описывает точку в пространстве, состоящую из трех координат: x, y, z.
// Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение.
// Две точки совпадают, если совпадают все их координаты:
const p1 = [1, 3, 4];
const p2 = [1, 3, 4];
const p3 = [0, 8, 4];
function isTheSamePoint(p1, p2) {
    return p1.every((el, i) => el === p2[i]);
}
console.log(isTheSamePoint(p1, p2)); // true
console.log(isTheSamePoint(p1, p3)); // false
console.log(isTheSamePoint(p2, p3)); // false
// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>
// THE SAME
