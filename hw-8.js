/* Задание 1 */
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people1.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

/* Задание 2 */
function isPositive(number) {
    return +number > 0;
}

function isMale(man) {
    return man.gender === 'male';
}

function filter(arr, filterFunction) {
    const output = [];

    arr.forEach(item => {
        if (filterFunction(item)) {
            output.push(item);
        }
    });

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

/* Задание 3 */
let func3 = () => {
    let intervalId = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalId);

        console.log('30 секунд прошло');
    }, 30000);
}

func3();

/* Задание 4 */
function delayForSecond4(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(() => {
        callback();
    }, 1000);

}

delayForSecond4(function () {
    console.log('Привет, Глеб!!');
})

/* Задание 5 */
// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));
