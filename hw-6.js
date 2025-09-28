/* Задание 1 */
const numbers1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);

    if (numbers1[i] === 10) {
        break;
    }
}

/* Задание 2 */
const numbers2 = [1, 5, 4, 10, 0, 3];

console.log(`indexOf индекс значения 4 : ${numbers2.indexOf(4)}`);

numbers2.forEach((item, index) => {
    if (item === 4) {
        console.log(`индекс значения 4 : ${index}`);
    }
});


/* Задание 3 */
const numbers3 = [1, 3, 5, 10, 20];

console.log(numbers3.join(' '));

/* Задание 4 */
const length = 3;
const numbers4 = [];

for (let row = 0; row < length; row++) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = 1;
    }

    numbers4[row] = arr;
}

console.log(numbers4);

/* Задание 5 */
const numbers5 = [1, 1, 1];

numbers5.push(2, 2, 2);

console.log(numbers5);

/* Задание 6 */
const numbers6 = [9, 8, 7, 'a', 6, 5];

console.log(numbers6.sort().filter(item => item !== 'a'));

/* Задание 7 */
const numbers7 = [9, 8, 7, 6, 5];

let userNumber = Number(prompt('угадай число:'));

if (numbers7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

/* Задание 8 */
const numbers8 = 'abcdef';

console.log(numbers8.split('').reverse().join(''));

/* Задание 9 */
const numbers9 = [[1, 2, 3], [4, 5, 6]];
const result = [];

numbers9.forEach(item => {
    result.push(...item);
});

console.log(result);

/* Задание 10 */
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers10.length; i++) {
    if (numbers10[i + 1]) {
        console.log(numbers10[i] + numbers10[i + 1]);
    }
}

/* Задание 11 */
const numbers11 = [1, 2, 3, 4];

let power = (arr) => {
    return arr.map(item => item ** 2);
}

console.log(power(numbers11));

/* Задание 12 */
const arr12 = ['Hello', 'my', 'friend'];

let count = (arr) => {
    return arr.map(item => item.length);
}

console.log(count(arr12));

/* Задание 13 */
const numbers13 = [1, -2, 3, -4];

let negative = (arr) => {
    return arr.filter(item => item < 0);
}

console.log(negative(numbers13));

/* Задание 14 */
let rand = () => {
    return Math.floor(Math.random() * 10);
}

const numbers14 = [];

for (let i = 0; i < 10; i++) {
    numbers14.push(rand());
}

console.log(numbers14);

const numbers14Even = numbers14.filter(item => item % 2 === 0);

console.log(numbers14Even);

/* Задание 15 */
const numbers15 = [];

for (let i = 0; i < 6; i++) {
    numbers15.push(rand());
}

console.log(numbers15);

console.log(numbers15.reduce((a, b) => a + b) / numbers15.length);