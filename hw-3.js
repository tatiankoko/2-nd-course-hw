/* Задание 1 */
let password = 'пароль';

let insertedPassword = prompt('Введите пароль');

if (insertedPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

/* Задание 2 */
let c = 7;
console.log(`${c} больше 0 и меньше 10`);

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 0;
console.log(`${c} больше 0 и меньше 10`);

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 10;
console.log(`${c} больше 0 и меньше 10`);

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = -3;
console.log(`${c} больше 0 и меньше 10`);

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 2;
console.log(`${c} больше 0 и меньше 10`);

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* Задание 3 */
let d = 30;
let e = 101;
console.log(`d = ${d}, e = ${e}. Одна из переменных больше 
100`);

if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

d = 100;
e = 50;

console.log(`d = ${d}, e = ${e}. Одна из переменных больше 
100`);

if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

/* Задание 4 */
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

/* Задание 5 */
let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log(`Месяц номер ${monthNumber} принадлежит к сезону зима`);
        break;
    case 3:
    case 4:
    case 5:

        console.log(`Месяц номер ${monthNumber} принадлежит к сезону весна`);
        break;
    case 6:
    case 7:
    case 8:

        console.log(`Месяц номер ${monthNumber} принадлежит к сезону лето`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`Месяц номер ${monthNumber} принадлежит к сезону осень`);
        break;
    default:
        console.log(`Месяца номер ${monthNumber} не существует`);
        break;
}

/* Дополнительное задание 1 */
let insertedVar = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(insertedVar)) {
    alert('Введенное значение не является числом');
} else if (insertedVar % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

/* Дополнительное задание 2 */
let clientOS = Number(prompt('Чем вы пользуетесь? 0 — iOS, 1 — Android'))

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Пользуйтесь сайтом банка');
}

/* Дополнительное задание 3 */
let clientDeviceYear = Number(prompt('Год выпуска телефона'));

if (clientDeviceYear < 2015 && clientOS === 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientDeviceYear >= 2015 && clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Установите облегченную версию приложения для Android по ссылке');
}


