// modal.js

document.getElementById('toggleQuizButton').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'flex'; // Показываем модальное окно
    document.body.classList.add('no-scroll'); // Отключаем прокрутку фона
});

document.getElementById('closeQuizButton').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'none'; // Скрываем модальное окно
    document.body.classList.remove('no-scroll'); // Включаем прокрутку фона
});
