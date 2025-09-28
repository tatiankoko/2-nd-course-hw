/* Текстовая шапка игры */
let introGame5 = `Игра ВИКТОРИНА
Простая викторина с вариантами ответов`;

// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

/**
 * Старт игры
 */
let game5 = () => {
    let correctCount = 0;

    for (let index = 0; index < quiz.length; index++) {
        let item = quiz[index];

        const question = `Вопрос ${index + 1}/${quiz.length} : ${item.question}`;
        const option = `Введи верный вариант ответа:\n${item.options.join('\n')}`;

        let answer = prompt(`${introGame5}\n\n${question}\n\n${option}`);

        if (answer === null) {
            return;
        }

        if (Number(answer) === item.correctAnswer) {
            correctCount++;
        }
    }

    const result = `Конец!\n\nПравильных ответов ${correctCount} из ${quiz.length}`;

    alert(`${introGame5}\n\n${result}`);
}