/* Интервал загаданных чисел */
const minLimit = 1;
const maxLimit = 100;

/* Текстовая шапка игры */
const introGame1 = `Игра УГАДАЙ ЧИСЛО
Угадай случайное число от ${minLimit} до ${maxLimit}.`;

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
 * Ввод пользователем загаданного числа и проверка ввода на корректность
 * @param {*} text текст внутри prompt после {@link introGame1}
 * @returns корректное введенное число в заданном интервале или null при отмене ввода
 */
let insertNumber = (text) => {
    let userNumber = prompt(`${introGame1}\n\n${text}`);

    while (userNumber != null &&
        (isNaN(Number(userNumber))
            || Number(userNumber) < minLimit
            || Number(userNumber) > maxLimit)) {
        userNumber = prompt(`${introGame1}\n\nТы ввел некорректное число ${userNumber}\n\nВведи целое число от ${minLimit} до ${maxLimit}:`);
    }

    return userNumber;
}

/**
 * Старт игры
 */
let game1 = () => {
    const hiddenNumber = getRandomInt(minLimit, maxLimit);
    const bottomText = 'Введи загаданное число:';

    let userNumber = insertNumber(
        `Будут подсказки: введенное число больше или меньше загаданного\n\n${bottomText}`);

    if (userNumber === null) {
        return;
    }

    while (Number(userNumber) !== hiddenNumber) {
        if (userNumber === null) {
            return;
        }

        let hint = (userNumber < hiddenNumber) ? 'БОЛЬШЕ' : 'МЕНЬШЕ';

        userNumber = insertNumber(
            `Ты ввел число ${userNumber}\n\nПОДСКАЗКА: загаданное число ${hint}\n\n${bottomText}`);
    }

    alert(`${introGame1}\n\nТы ввел число ${userNumber}\n\nПОЗДРАВЛЯЕМ! Ты угадал загаданное число!`);
}