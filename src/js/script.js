/* Перше */

/*const USER_AGE = Number(prompt('Введіть ваш вік:'));
if (USER_AGE > 0 && USER_AGE < 12){
alert('Ви дитина');
} else if (USER_AGE >= 12 && USER_AGE < 18){
  alert('Ви підліток');
} else if (USER_AGE >= 18 && USER_AGE <= 60){
  alert('Ви дорослий');
} else if (USER_AGE > 60 && USER_AGE <= 120){
  alert('Ви пенсіонер');
} else if (USER_AGE > 120){
  alert('Ви ввели невірний вік');
}*/

/* Друге */

/*const USER_NUMBER = Number(prompt('Введіть будь яке число від 0 до 9:'));
switch (USER_NUMBER) {
  case 0:
    alert (')');
    break;
    case 1:
    alert ('!');
    break;
    case 2:
    alert ('@');
    break;
    case 3:
    alert ('#');
    break;
    case 4:
    alert ('$');
    break;
    case 5:
    alert ('%');
    break;
    case 6:
    alert ('^');
    break;
    case 7:
    alert ('&');
    break;
    case 8:
    alert ('*');
    break;
    case 9:
    alert ('(');
    break;
    default:
    alert('Ви ввели невірне число!');
}*/

/* Третє */

/*let userNumber = prompt('Введіть будь яке тризначне число:');
let arr = userNumber.split('');
console.log(arr);
if (arr.length == 3) {
  let uniq = Array.from(new Set(arr));
  if (arr.length > uniq.length) {
    alert("Є однакові цифри")
  } else {
    alert("Немає одинакових цифр")
  }
} else {
  alert('Ви ввели невірне число!')
}*/

/* Четверте */

/*const USER_YEAR = Number(prompt('Введіть будь який рік'))
if (USER_YEAR <= 1900 || USER_YEAR >= 2100 ) {
  alert('Ви неправильно ввели рік!!!')
}
else if (USER_YEAR % 4 == 0) {
  alert('Даний рік ВИСОКОСНИЙ!')
} else {
  alert('Даний рік НЕВИСОКОСНИЙ!')
}*/

/* П’яте */

/*const numberUsers = prompt('Введіть будь яке п’ятирозрядне число')
let arrNumberUser = numberUsers.split('');
for (let i = 0; i < arrNumberUser.length; i++) {
  k = (arrNumberUser.length - 1) - i;
  r = arrNumberUser[k] - arrNumberUser[i];
  if (r != 0) {
    break;
  }
}
if (numberUsers < 0 || numberUsers.length != 5) {
  alert('Ви ввели невірне число!')
}
else if (r == 0) {
  alert('Введене вами число - паліндром!')
} else {
  alert('Введене вами число - не паліндром!')
}*/

/* Шосте */

/*const USER_MONEY = Number(prompt('Введіть суму доларів (USD) яку хочете поміняти'))
let userCourses = Number(prompt('Виберіть валюту (ЦИФРУ) в яку хочете поміняти: 1-EUR; 2-UAN; 3-AZN'))
if (USER_MONEY < 0) {
  alert('Ви ввели невірну суму!')
}
else if (userCourses == 1) {
  alert(`Ваша сума грошей дорівнює: ${(USER_MONEY * 1.07).toFixed(2)} EUR`);
} else if (userCourses == 2) {
  alert(`Ваша сума грошей дорівнює: ${(USER_MONEY * 40.4).toFixed(2)} UAN`);
} else if (userCourses == 3) {
  alert(`Ваша сума грошей дорівнює: ${(USER_MONEY * 1.72).toFixed(2)} AZN`);
}*/

/* Сьоме */

/*let userSum = Number(prompt('Введіть суму покупки'));
if (userSum < 200) {
  alert('Ви ввели невірну суму!!!')
}
else if (userSum >= 200 && userSum <= 300) {
  let userSumFirst = userSum - (userSum * 0.03)
  alert(`Ваша сума зі знижкою 3% = ${userSumFirst} грн`);
} else if (userSum > 300 && userSum <= 500) {
  let userSumNext = userSum - (userSum * 0.05)
  alert(`Ваша сума зі знижкою 5% = ${userSumNext} грн`);
} else if (userSum > 500) {
  let userSumLast = userSum - (userSum * 0.07)
  alert(`Ваша сума зі знижкою 7% = ${userSumLast} грн`);
}*/

/* Восьме */

/*let circuit = Number(prompt('Введіть довжину кола'));
let perimeterSquare = Number(prompt('Введіть периметр квадрата'));
let DIAMCIRCUL = circuit / 3.14;
let SIDESQUARE = perimeterSquare / 4;
if (DIAMCIRCUL < 0 || SIDESQUARE < 0){
  alert('Ви ввели невірне число!')
}
 else if (DIAMCIRCUL < SIDESQUARE){
  alert('Дане коло поміститься в квадрат!')
} else if (DIAMCIRCUL > SIDESQUARE){
  alert('Дане коло не поміститься в квадрат!')
}*/

/* Дев’яте */

/*let counter = 0;
let userQuestionFirst = prompt('Коли день Незалежності України? \n1 - 24 серпня \n2 - 28 червня \n3 - 1 січня');
if (userQuestionFirst == 1) {
  alert('Ваша відповідь правильна!')
  counter++;
} else {
  alert('Ви ввели не правильну відповідь!')
}
let userQuestionSecond = prompt('Коли день Конституції України? \n1 - 24 серпня \n2 - 28 червня \n3 - 1 січня');
if (userQuestionSecond == 2) {
  alert('Ваша відповідь правильна!')
  counter++;
} else {
  alert('Ви ввели не правильну відповідь!')
}
let userQuestionThree = prompt('Коли Новий Рік в Україні? \n1 - 24 серпня \n2 - 28 червня \n3 - 1 січня');
if (userQuestionThree == 3) {
  alert('Ваша відповідь правильна!')
  counter++;
} else {
  alert('Ви ввели не правильну відповідь!')
}
alert(`Ваша кількість набраних балів: ${counter * 2}`)*/

/* Десяте */

// const NEW_USER_DAY = 0;
// const NEW_USER_MONTH = 0;
// const NEW_USER_YEAR = 0;
// let userDay = Number(prompt('Введіть будь який день року'));
// let userMonth = Number(prompt('Введіть будь який місяць року (номером від 1 до 12)'));
// let userYear = Number(prompt('Введіть будь який рік'));
// let monthLength = [31,28,31,30,31,30,31,31,30,31,30,31];
// if (userMonth > 0 && userMonth < 32){
//   alert('Ви ввели невірний день')
// } else {
//   NEW_USER_DAY++
// }
// if (userMonth > 0 && userMonth <=31){
//   alert('Ви ввели невірний місяць')
// }

// let userDates = new Date (prompt('date'));
// console.log(userDates.getMonth()+1)
// console.log(userDates.getDate())
// console.log(userDates.getFullYear())

let userDay = new Date(prompt('Day'));
let userMonth = new Date(prompt('Month'));
let userYear = new Date(prompt('Year'));

console.log (`${userDay.getDate()}.${userMonth.getMonth()}.${userYear.getFullYear()}`)





