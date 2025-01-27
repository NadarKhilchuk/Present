// Обработчик отправки формы викторины
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result');
    
    let score = 0;
    const totalQuestions = 7;

    // Проверка ответов на каждый вопрос
    const answers = [
        'Майя',  // Правильный ответ на вопрос 1
        '5',           // Правильный ответ на вопрос 2
        '3',           // Правильный ответ на вопрос 3
        'Хрезонтеми',     // Правильный ответ на вопрос 4
        'Смердючий сир',      // Правильный ответ на вопрос 5
        'Фiолетовий',    // Правильный ответ на вопрос 6
        'Максим Тю надар Тю Никита Бодя' // Правильный ответ на вопрос 7
    ];

    // Проверка каждого вопроса
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = form.querySelector(`input[name="question${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[i - 1]) {
            score++;
        }
    }

    // Показ результата
    resultContainer.textContent = `Ваш результат: ${score} з ${totalQuestions}`;
    resultContainer.style.display = 'block';
}
