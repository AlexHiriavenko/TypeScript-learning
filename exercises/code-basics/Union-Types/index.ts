// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию lastIndex(str, char),
// которая возвращает индекс последнего вхождения символа в строку или null,
// если такого символа нет.

const str = "test";
console.log(lastIndex(str, "t")); // 3
console.log(lastIndex(str, "p")); // null

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

function lastIndex(str: string, char: string): number | null {
    return str.lastIndexOf(char) === -1 ? null : str.lastIndexOf(char);
}

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

function lastIndex2(str: string, char: string): number | null {
    const index = str.lastIndexOf(char);
    return index === -1 ? null : index;
}
