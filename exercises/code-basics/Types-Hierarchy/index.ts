// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию getUserFriends(), которая принимает JSON
// с массивом пользователей и с массивом id друзей
// и возвращает список друзей пользователя по id.
// Друзья каждого пользователя хранятся в поле friends.

// Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

const userJson = JSON.stringify(<UserResponse>{
    users: [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Mary", age: 21 },
        { id: 3, name: "Peter", age: 22 },
        { id: 4, name: "Ann", age: 23 },
    ],
    friends: [
        [1, 2],
        [1, 3],
        [3, 2],
    ],
});

console.log(getUserFriends(userJson, 1)); // [{ id: 2, name: 'Mary', age: 21 }, { id: 3, name: 'Peter', age: 22 },]
console.log(getUserFriends(userJson, 2)); // [ { id: 1, name: 'John', age: 20 }, { id: 3, name: 'Peter', age: 22 }, ]
console.log(getUserFriends(userJson, 3)); // [ { id: 1, name: 'John', age: 20 }, { id: 2, name: 'Mary', age: 21 }, ]
console.log(getUserFriends(userJson, 10)); // []

type User = {
    id: number;
    name: string;
    age: number;
};

type Friends = [number, number];

export type UserResponse = {
    users: User[];
    friends: Friends[];
};

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

function getUserFriends(response: string, userId: number): User[] {
    const allUsers: UserResponse = JSON.parse(response);
    const { friends, users } = allUsers;

    let userFriendsId: number[] = friends
        .filter((friend) => friend.includes(userId))
        .flat()
        .filter((id: number) => id !== userId);

    let userFriends = users.filter((user) => userFriendsId.includes(user.id));
    return userFriends;
}

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

const defaultUser = { id: 0, name: "", age: 0 };
const getUserFriend2 = (userResponseJSON: string, userId: number): User[] => {
    const userResponse: UserResponse = JSON.parse(userResponseJSON) as UserResponse;

    return userResponse.friends
        .map(([ownerId, friendId]: Friends): User => {
            if (!(userId === ownerId || userId === friendId)) return defaultUser;
            const searchId = ownerId === userId ? friendId : ownerId;
            const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId);

            return friend === undefined ? defaultUser : friend;
        })
        .filter((user: User) => user.id > 0);
};
