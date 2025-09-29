/**
 * Генератор случайных цветов
 * @returns {`#${string}`} случайный цвет в hex
 */
const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/**
 * Старт игры
 */
let game6 = () => {
    const gamesEl = document.querySelector(".games");
    const aboutEl = document.querySelector(".about");

    if (gamesEl && aboutEl) {
        const backgroundColor = generateRandomColor();

        gamesEl.style.backgroundColor = backgroundColor;
        aboutEl.style.backgroundColor = backgroundColor;
    }
}