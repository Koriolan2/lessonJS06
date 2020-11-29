'use strict'

// Определяем число или нет 
const checkNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Генератор случайного числа
const getRandomNumber = function(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Проверка введенных данных
const getUserNumber = function(str) {
  const number = prompt(str);
  if(number) {
    if (checkNumber(number)) {
      return +number;
    } 
    getUserNumber(str);
  } else {
    alert ('Игра окончена!');
  }
  
}

const game = function() {
  const randomNumber = getRandomNumber(0,  100);
  console.log('Загаданное число ' + randomNumber);

  return function play() {
    const userNumber = getUserNumber('Введи свое число');

    if (userNumber > randomNumber) {
        alert('Загаданное число меньше');
        play();
    }

    if (userNumber < randomNumber) {
      alert('Загаданное число больше');
      play();
    }

    if (userNumber === randomNumber) {
      alert('Поздравляю! Ты угадал!');
    }
  }
}

const c = game();
c();