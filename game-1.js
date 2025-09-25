/* Интервал загаданных чисел */ 
let minLimit = 1;
let maxLimit = 100;

/* Текстовая шапка игры */
let intro = `Игра УГАДАЙ ЧИСЛО

Угадай случайное число от ${minLimit} до ${maxLimit}.\n\n`;

/**
 * Получение случайного целого числа в заданном интервале
 * @param {*} min минимальное значение числа
 * @param {*} max максимальное значение числа
 * @returns целое число в заданном интервале включительно
 */
let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Ввод пользователем загадонного числа и проверка ввода на корректность
 * @param {*} text текст внутри prompt
 * @returns корректное введенное число в заданном интервале или null при отмене ввода
 */
let insertNumber = (text) => {
    let userNumber = prompt(`${text}`);

    if (typeof userNumber === null
        || !isNaN(Number(userNumber))
        && userNumber >= minLimit
        && userNumber <= maxLimit) {
        return userNumber;
    } else {
        while (userNumber != null &&
            (isNaN(Number(userNumber))
                || Number(userNumber) < minLimit
                || Number(userNumber) > maxLimit)) {
            userNumber = prompt(`${intro}Ты ввел некорректное число ${userNumber}\n\nВведи целое число от ${minLimit} до ${maxLimit}:`);
        }

        return userNumber;
    }
}

/**
 * Старт игры
 */
let game1 = () => {
    let hiddenNumber = getRandomInt(minLimit, maxLimit);

    let userNumber = insertNumber(
        `${intro}Будут подсказки: введенное число больше или меньше загаданного\n\nВведи загаданное число:`);

    if (userNumber === null) {
        return;
    }

    while (Number(userNumber) !== hiddenNumber) {
        if (userNumber === null) {
            return;
        }

        let hint = (userNumber < hiddenNumber) ? 'больше' : 'меньше';

        userNumber = insertNumber(`${intro}Ты ввел число ${userNumber}\n\nПОДСКАЗКА: загаданное число ${hint}\n\nВведи загаданное число:`);
    }

    if (Number(userNumber) === hiddenNumber) {
        alert(`${intro}Вы ввели число ${userNumber}\n\nПОЗДРАВЛЯЕМ! Вы угадали загаданное число!`);
    }
}