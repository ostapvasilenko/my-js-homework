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

const USER_MONEY = Number (prompt('Введіть суму доларів (USD) яку хочете поміняти'))
let userCourses =  Number (prompt('Виберіть валюту (ЦИФРУ) в яку хочете поміняти: 1-EUR; 2-UAN; 3-AZN'))
if (userCourses == 1){
  alert(`Ваша сума грошей дорівнює: ${USER_MONEY * 1.07} EUR`);
} else if (userCourses == 2){
  alert(`Ваша сума грошей дорівнює: ${USER_MONEY * 40.4} UAN`);
} else if(userCourses == 3){
  alert(`Ваша сума грошей дорівнює: ${USER_MONEY * 1.72} AZN`);
}



// switch (USER_COURSE) {
//   case USER_COURSE = 1:
//     console.log(`Ваша сума грошей дорівнює: ${USER_MONEY * 1.07} EUR`);
//     break;
//   case USER_COURSE = 2:
//     console.log(`Ваша сума грошей дорівнює: ${USER_MONEY * 40.4} UAN`);
//     break;
//   case USER_COURSE = 3:
//     console.log(`Ваша сума грошей дорівнює: ${USER_MONEY * 1.72} AZN`);
//     break;
// }
