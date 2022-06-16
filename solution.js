// Задачи на сообразительность
/* 1 задача
Есть 90 человек. Каждый из этих 90 человек относится к одной из двух категорий. Одни на все вопросы говорят правду, другие — всегда врут. У каждого ровно 1 любимое блюдо из списка (макароны/пельмени/вареники). Каждому задают три вопроса:
Ваше любимое блюдо — макароны?
Ваше любимое блюдо — пельмени?
Ваше любимое блюдо — вареники?
Результаты получились такие: 
на первый вопрос утвердительно ответило 45 человек,
на второй — 35,
на третий — 30.
Сколько человек всегда говорят правду? */

/* Решение:  
110-90 = 20 врут
90 — 20 = 70 правду говорят
Ответ:  70
Время: 3 мин. */

// Остальные не решил :(

/* Задачи по программированию */

/*
Задание №1 
Написать метод/функцию, который/которая на вход принимает массив городов.
В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка.
Например, «Москва, Санкт-Петербург, Воронеж.» 
*/

function solutionFirst() {
  const arrCity = ['Москва', 'Санкт - Петербург', 'Воронеж'];

  function createString(arr) {
    return `${arr.join(', ')}.`;
  }

  console.log(createString(arrCity));
}

// solutionFirst();
// Время: 6,5 мин.

/* 
Задание №2
Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. 
Пример: 
27 => 25, 27.8 => 30, 41.7 => 40. 
*/

function solutionSecond() {
  const number = 30;

  function roundingToFive(n) {
    const firstСondition = n % 5;
    const secondondition = n % 10;

    if (!firstСondition) {
      return n;
    }

    if (firstСondition <= 2.5 && secondondition < 5) {
      return Math.round(n / 10) * 10;
    }

    if (firstСondition > 2.5 && secondondition < 5) {
      return Math.round(n / 10) * 10 + 5;
    }

    if (firstСondition < 2.5 && secondondition > 5) {
      return (Math.round(n / 10) - 1) * 10 + 5;
    }

    if (firstСondition > 2.5 && secondondition > 5) {
      return Math.round(n / 10) * 10;
    }
  }
  console.log(roundingToFive(number));
}

// solutionSecond();
// Время: 35мин

/*
Задание №3
Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже,
 соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров». 
 */

function solutionThird() {
  const testNumbers = [0, 1, 2, 3, 4, 5, 6, 10, 11, 20, 21, 22, 25, 41, 54, 55, 101, 1100];

  function countComputersStr(number) {
    if (number % 10 === 1 && number != 11) {
      return `${number} компьютер`;
    }

    if (
      number === 2 ||
      number === 3 ||
      number === 4 ||
      number % 10 === 2 ||
      number % 10 === 3 ||
      number % 10 === 4
    ) {
      return `${number} компьютера`;
    }

    return `${number} компьютеров`;
  }

  testNumbers.forEach((number) => {
    console.log(countComputersStr(number));
  });
}

// solutionThird();
// Время: 18мин

/* 
Задание №4
Написать метод/функцию, который/которая на вход принимает целое число, 
а на выходе возвращает то, является ли число простым 
(не имеет делителей кроме 1 и самого себя). 
*/

function solutionFour() {
  const testNumbers = [0, 1, 2, 3, 4, 8, 9, 11, 22, 25, 50, 53, 103, 104];

  function isSimple(n) {
    if (n === 0 || n === 1) {
      return 'not simple';
    }

    if (n % 2 === 0 && n != 2) {
      return 'not simple';
    }

    if (Math.sqrt(n) === Math.round(Math.sqrt(n))) {
      return 'not simple';
    }

    for (let i = 3; i < n; i += 2) {
      if (!n % i) {
        return 'not simple';
      }
    }
    return 'simple';
  }

  testNumbers.forEach((number) => {
    console.log(number, isSimple(number));
  });
}

// solutionFour();
// Время: 23 мин

/* 
Задание №5
Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом).
На вход подаются два массива.
На выходе массив с необходимыми совпадениями.
Пример:
[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
На выходе [1, 17] 
*/

function solutinFive() {
  const arrTest1 = [7, 17, 1, 9, 1, 17, 56, 56, 23],
    arrTest2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

  function findComparison(arr1, arr2) {
    const result = [];

    arr1.sort();
    arr2.sort();

    for (let i = arr1.length; i >= 0; i--) {
      const item = isTwoComparison(arr1[i], arr1);
      if (item) {
        if (isTwoComparison(item, arr2)) {
          result.push(item);
        }
      }
    }
    const res = [];
    for (let i = 0; i < result.length; i += 2) {
      res.push(result[i]);
    }

    return res.sort();

    function isTwoComparison(item, arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (count === 2) {
          return item;
        }
        if (item === arr[i]) {
          count++;
        }
      }
      return 0;
    }
  }

  console.log(findComparison(arrTest1, arrTest2));
}

// solutinFive();
// Время: 51мин
