/**
 * Анимированная полоса с названиями игр
 */

// список всех заголовков описания игр
const gameTitleList =
    document.querySelectorAll(".about-game__title");

// блок с анимированной полосой
const animatedLine = document.querySelector(".animated-line-wrapper");

if (gameTitleList && animatedLine) {
    // массив названий игр
    const gameTitleStrings = [];

    gameTitleList.forEach(item => {
        if (item.textContent.startsWith('Простая в')) {
            // простая викторина превратилась в викторину
            gameTitleStrings.push(item.textContent
                .split(' ')
                .pop());
        } else {
            gameTitleStrings.push(item.textContent);
        }
    });

    // восстанавливаем порядок названий с макета
    gameTitleStrings.sort((a, b) => b.localeCompare(a));
    gameTitleStrings.unshift(gameTitleStrings.pop());

    // добавление элементов с названием игры на анимированную полосу
    for (let i = 0; i < gameTitleStrings.length; i++) {
        const newEl = document.createElement('p');
        newEl.textContent = gameTitleStrings[i];
        newEl.className = 'animated-line__text';

        animatedLine.append(newEl);
    }
}
