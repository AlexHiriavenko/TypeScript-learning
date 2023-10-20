// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию formatPrice(), которая принимает число
// и возвращает строку с округлением до второго числа после запятой.
// Если пришел null или undefined должна вернуться '$0.00'.

console.log(formatPrice(3.145)); // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()); // '$0.00'
console.log(formatPrice(null)); // '$0.00'
console.log(formatPrice(undefined)); //'$0.00'

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

function formatPrice(n: number | null = 0): string {
    return n === null ? "$0.00" : "$" + n.toFixed(2);
}

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

function formatPrice2(price?: number | null): string {
    if (price === undefined || price === null) {
        return "$0.00";
    }

    return `$${price.toFixed(2)}`;
}
