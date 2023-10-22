// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Реализуйте функцию makeTurn(), которая принимает строку left или right
// и перемещает черепашку вперед - назад по одномерной карте длиной пять.
// Если ход невозможен, должно выброситься исключение.

// const { makeTurn, state } = startGame();
// console.log(state); // ['turtle', null, null, null, null]

// makeTurn('left') // ERROR

// makeTurn('right');
// makeTurn('right');
// console.log(state); // [null, null, 'turtle', null, null]

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

type Turtle = "turtle" | null;
type MoveTo = "left" | "right";

type Game = {
    makeTurn: (direction: MoveTo) => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ["turtle", null, null, null, null];

    function makeTurn(str: MoveTo) {
        let index = state.indexOf("turtle");
        const isPossibleMove = (str: MoveTo, index: number): boolean =>
            !((str === "left" && index === 0) || (str === "right" && index === state.length - 1));
        const move = {
            left: -1,
            right: +1,
        };
        try {
            if (isPossibleMove(str, index)) {
                state[index] = null;
                index += move[str];
                state[index] = "turtle";
            } else {
                throw new Error("ERROR");
            }
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    return { makeTurn, state };
};

export default startGame;

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]
makeTurn("left"); // ERROR
makeTurn("right");
makeTurn("right");
console.log(state); // [null, null, 'turtle', null, null]
makeTurn("left");
console.log(state); // [null, 'turtle', null, null, null]

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

const startGame2 = (): Game => {
    const state: Array<Turtle> = ["turtle", null, null, null, null];

    const makeTurn = (direction: "left" | "right"): void => {
        const turtleIndex = state.indexOf("turtle");
        const nextIndex = direction === "left" ? turtleIndex - 1 : turtleIndex + 1;

        if (nextIndex < 0 || nextIndex > 4) {
            throw new Error("Out of bounds");
        }

        state[turtleIndex] = null;
        state[nextIndex] = "turtle";
    };

    return { makeTurn, state };
};
