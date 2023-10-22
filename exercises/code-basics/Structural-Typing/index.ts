// <<<<<<<<<<<< Задание >>>>>>>>>>>>

// Опишите тип состояния DataState и перечисление LoadingStatus.
// Затем реализуйте функцию handleData(), которая принимает на вход DataState
// и возвращает строку в зависимости от состояния:
// loading... при LoadingStatus.loading,
// error при LoadingStatus.error,
// строку из числового поля data при LoadingStatus.success.
// Если статус не входит в перечисление, функция возвращает unknown.

// <<<<<<<<<<<< Мое Решение >>>>>>>>>>>>

enum LoadingStatus {
    Loading,
    Error,
    Success,
}

type DataState = {
    status: LoadingStatus;
    error?: Error;
    data?: number;
};

type StatusKeys = { [key in LoadingStatus]: string };

function handleData(dataState: DataState, data?: Error | number): string {
    const status = dataState.status;
    const messages: StatusKeys = {
        [LoadingStatus.Loading]: "loading...",
        [LoadingStatus.Error]: "error",
        [LoadingStatus.Success]: dataState?.data?.toString() || "uknown",
    };
    return messages[status] || "uknown";
}

// Проверка

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error("error") };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42

// <<<<<<<<<<<< Решение Code-Basics>>>>>>>>>>>>

enum LoadingStatus2 {
    Loading = "Loading",
    Success = "Success",
    Error = "Error",
}

type DataState2 =
    | { status: LoadingStatus2.Loading }
    | { status: LoadingStatus2.Success; data: number }
    | { status: LoadingStatus2.Error; error: Error };

const handleData2 = (dataState: DataState2): string => {
    switch (dataState.status) {
        case LoadingStatus2.Loading:
            return "loading...";
        case LoadingStatus2.Success:
            return String(dataState.data);
        case LoadingStatus2.Error:
            return dataState.error.message;
        default:
            return "unknown";
    }
};

// Проверка

const loading2: DataState2 = { status: LoadingStatus2.Loading };
console.log(handleData2(loading2)); // loading...

const error2: DataState2 = { status: LoadingStatus2.Error, error: new Error("error") };
console.log(handleData2(error2)); // error

const success2: DataState2 = { status: LoadingStatus2.Success, data: 42 };
console.log(handleData2(success2)); // 42
