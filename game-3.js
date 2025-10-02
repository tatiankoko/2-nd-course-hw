/* Текстовая шапка игры */
const introGame3 = 'Игра ПЕРЕВЕРНИ ТЕКСТ';

/**
 * Старт игры
 */
let game3 = () => {
    let bottomText = 'Введи текст, который будет перевернут:';

    let inText = prompt(`${introGame3}\n\n${bottomText}`);

    while (inText !== null) {
        let reversedText = inText
            .split('')
            .reverse()
            .join('');

        let text = `Ты ввел:\n${inText}\n\nПеревернутый текст:\n${reversedText}\n\n${bottomText}`;

        inText = prompt(`${introGame3}\n\n${text}`);
    }
}