/* Задание 1 */
let min = (a, b) => {
    return a < b ? a : b
};

let num1 = 8;
let num2 = 4;

console.log(`Mеньшее из двух чисел ${num1} и ${num2} это ${min(num1, num2)}`);

/* Задание 2 */
let isEven = (number) => (number % 2 === 0) ? alert('Число четное') : alert('Число нечетное');

isEven(prompt('Введите число'));

/* Задание 3 */
let sqrt = number => number ** 2;
let logSqrt = number => console.log(`квадрат числа ${number} равен ${sqrt(number)}`);

logSqrt(num2);

/* Задание 4 */
let ageDetect = () => {
    let age = prompt('Сколько Вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age > 12) {
        alert('Добро пожаловать!');
    } else {
        alert('Привет, друг!');
    }
}

ageDetect();

/* Задание 5 */
let checkNumber = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

let a = 10;
let b = 'pop';

console.log(checkNumber(a, b));

/* Задание 6 */
let thirdPower = () => {
    let n = Number(prompt('Введите число'));

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        let result = n ** 3;

        return n + ' в кубе равняется ' + result;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(thirdPower());
}

/* Задание 7 */
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

let circle1 = {
    radius: 10,
    area: getArea,
    perimeter: getPerimeter
};

let circle2 = {
    radius: 90,
    area: getArea,
    perimeter: getPerimeter
};

console.log(`circle1 area ${circle1.area()}`);
console.log(`circle2 area ${circle2.area()}`);

console.log(`circle1 perimeter ${circle1.perimeter()}`);
console.log(`circle2 perimeter ${circle2.perimeter()}`);