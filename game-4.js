/* Текстовая шапка игры */
let introGame4 = `Игра КАМЕНЬ, НОЖНИЦЫ, БУМАГА против компьютера`;

// варианты
//const game4Choice = ['камень', 'ножницы', 'бумага'];
const game4Choice = ['камень', 'ножницы', 'бумага'];

/**
 * Генерация случайного индекса для варианта компьютера
 * @returns {number} случайное число от 1 до 3
 */
let randomChoice = () => Math.floor(Math.random() * game4Choice.length + 1);

let bottomText = `Введи свой вариант:\n${game4Choice
    .map((item, index) => `${index + 1}. ${item}`)
    .join('\n')}`;

/**
 * Ввод выбора пользователем и проверка ввода на корректность
 * @param {*} text текст внутри prompt между {@link introGame4} и {@link bottomText}
 * @returns корректное введенное число в заданном интервале (1-3) или null при отмене ввода
 */
let askUserChoice = (text) => {
    let userNumber = prompt(`${introGame4}\n\n${text}${bottomText}`);

    if (typeof userNumber === null
        || !isNaN(+userNumber)
        && userNumber >= 1
        && userNumber <= game4Choice.length) {
        return userNumber;
    } else {
        while (userNumber != null &&
        (isNaN(Number(userNumber))
            || Number(userNumber) < 1
            || Number(userNumber) > game4Choice.length)) {
            userNumber = prompt(`${introGame4}\n\nТы ввел некорректное число.\n\n${bottomText}`);
        }

        return userNumber;
    }
}

/**
 * Старт игры
 */
let game4 = () => {
    let userResult = askUserChoice('');

    while (userResult !== null) {
        let computerResult = randomChoice();
        let text = `${game4Choice[userResult - 1].toUpperCase()} (ты) vs ${game4Choice[computerResult - 1].toUpperCase()} (компьютер)\n\n`;

        if (+userResult === computerResult) {
            text += 'НИЧЬЯ!';
        } else if (
            (+userResult === 1 && computerResult === 2) ||
            (+userResult === 2 && computerResult === 3) ||
            (+userResult === 3 && computerResult === 1)
        ) {
            text += 'ТЫ ПОБЕДИЛ!!';
        } else {
            text += 'ТЫ ПРОИГРАЛ. Попробуй еще!';
        }

        userResult = askUserChoice(`${text}\n`);
    }
}