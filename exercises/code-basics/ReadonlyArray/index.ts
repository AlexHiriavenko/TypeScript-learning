// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию reverse(), которая переворачивает массив.
// Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке.
// Используйте модификатор readonly для входящего массива.Не используйте встроенный метод reverse().

// reverse([1, 2, 8]); // [8, 2, 1]
// reverse([10, 33, 7, 0]); // [0, 7, 33, 10]

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

function reverse(array: readonly unknown[]): unknown[] {
    let res = [];
    for (let i = array.length - 1; i >= 0; i -= 1) {
        res.push(array[i]);
    }
    return res;
}


console.log(reverse([1, 2, 8]))

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

function reverse2(coll: readonly number[]): number[] {
  return coll.map((_, index) => coll[coll.length - 1 - index]);
}

console.log(reverse2([1, 2, 8]))