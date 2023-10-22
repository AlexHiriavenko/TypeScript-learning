// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте объект по описанному типу Form.
// Поле name.value должно проходить валидацию, а поле age — нет.

type Form = {
    age: {
        value: number;
        validator: (val: number) => boolean;
    };
    name: {
        value: string;
        validator: (val: string) => boolean;
    };
};

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

const form: Form = {
    age: {
        value: 0,
        validator: (value) => !!value,
    },
    name: {
        value: "Alex",
        validator: (value) => !!value,
    },
};

console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

const form1: Form = {
    name: {
        value: "Kirill",
        validator: (val: string) => val.length > 1,
    },
    age: {
        value: 17,
        validator: (val: number) => val > 18,
    },
};
