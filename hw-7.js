/* Задание 1 */
let str = 'js';
console.log(str.toUpperCase());

/* Задание 2 */
const arr2 = ['Hello', 'hallo', 'hej', 'Salut'];
str = 'he';

let func2 = (arr, str) => {
    return arr.filter(word => word.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(func2(arr2, str));

/* Задание 3 */
const number = 32.58884;
console.log(`${number} до меньшего целого ${Math.floor(number)}`);
console.log(`${number} до большего целого ${Math.ceil(number)}`);
console.log(`${number} до ближайшего целого ${Math.round(number)}`);

/* Задание 4 */
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(`Числа ${arr4}`);
console.log(`Минимальное значение ${Math.min(...arr4)}`);
console.log(`Максимальное значение ${Math.max(...arr4)}`);

/* Задание 5 */
let random1To10 = () => console.log(Math.floor(Math.random() * 10) + 1);

random1To10()

/* Задание 6 */
let randomInt6 = (max) => {
    return Math.floor(Math.random() * max);
}

let func6 = (number) => {
    const arr = [];

    for (let i = 0; i < Math.floor(number / 2); i++) {
        arr.push(randomInt6(number));
    }

    return arr;
}

let number6 = 10;
console.log(`Число ${number6}`);
console.log(`Массив ${func6(number6)}`);

/* Задание 7 */
let number71 = 10;
let number72 = 15;

let func7 = (num1, num2) => {
    let min = Math.ceil(Math.min(num1, num2));
    let max = Math.floor(Math.max(num1, num2));

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Числа ${number71} и ${number72}`);
console.log(`Случайное число в этом диапазоне ${func7(number71, number72)}`);

/* Задание 8 */
console.log(new Date().toLocaleDateString('ru-RU'));

/* Задание 9 */
let currentDate = new Date();
const interval = 73;

currentDate.setDate(currentDate.getDate() + interval);

console.log(`Дата через ${interval} дня ${currentDate.toLocaleDateString('ru-RU')}`);

/* Задание 10 */
let func10 = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

console.log(func10(new Date()));