// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте тип Admin, который является пересечением типов AdminPermission и User.
// Реализуйте функцию addAdmin(), которая принимает значение с типом User и возвращает значение с типом Admin.
// В качестве значения для свойства permission должно быть значение Permission.READ.

enum Permission {
    READ,
    WRITE,
    DELETE,
}

type User = {
    login: string;
};

type AdminPermission = {
    permission: Permission;
};

const user: User = { login: "login1" };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }
console.log(admin);

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

type Admin = User & AdminPermission;

function addAdmin(user: User): Admin {
    return { ...user, permission: Permission.READ };
}

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

type Admin2 = User & AdminPermission;

const addAdmin2 = (user: User): Admin => ({ ...user, permission: Permission.READ });
