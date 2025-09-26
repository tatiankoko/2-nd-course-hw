/* Текстовая шапка игры */
intro = `Игра ПРОСТАЯ АРИФМЕТИКА

Решай простые арифметические задачи`;

/* Арифметические операции */
const arithmeticOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

/* Правильный результат выполнения задачи */
let result;

let randomInt = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 * Случайное целое число, которое делится на {@link divisor} без остатка и не превышает {@link max}
 * @param divisor делитель
 * @param max максимальное значение числа
 * @returns {number} случайное число, которое делится на {@link divisor} без остатка и не превышает {@link max}
 */
let randomDivisibleNumber = (divisor, max) => {
    // Находим максимальное число, которое делится на divisor и не превышает max
    const maxMultiplier = Math.floor(max / divisor);

    // Генерируем случайный множитель от 0 до maxMultiplier
    const multiplier = Math.floor(Math.random() * (maxMultiplier + 1));

    // Умножаем делитель на случайный множитель
    return multiplier * divisor;
}

/**
 * Генератор арифметической задачи.<br>
 * Сохраняет результат решения задачи в {@link result}.<br>
 * Возвращает арифметическую операцию в формате строки
 */
let generateTask = () => {
    let operation = randomInt(4);
    let a = 0;
    let b = 0;

    if (operation === 0) {
        a = randomInt(50);
        b = randomInt(50);
        operation = '+';
    } else if (operation === 1) {
        a = randomInt(50);
        b = randomInt(50);
        operation = '-';
    } else if (operation === 2) {
        a = randomInt(10);
        b = randomInt(10);
        operation = '*';
    } else if (operation === 3) {
        do {
            b = randomInt(40);
        } while (b === 0)

        a = randomDivisibleNumber(b, 100);
        operation = '/';
    }

    result = arithmeticOperations[operation](a, b);

    return `${a} ${operation} ${b} `;
}

/**
 * Старт игры
 */
let game2 = () => {
    let text = 'Начнем!';
    let operation = '';

    let userResult = undefined;

    while (userResult !== null) {
        operation = generateTask();

        userResult = prompt(`${intro}\n\n${text}\n\n${operation}`);

        if (userResult !== ''
            && !isNaN(Number(userResult))
            && Number(userResult) === result) {
            text = `${operation} = ${userResult}  Верно!`;
        } else {
            text = `${operation} = ${userResult}  Не верно :(\nПравильный ответ ${result}`;
        }
    }
}