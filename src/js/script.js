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

let USER_NUMBER = Number(prompt('Введіть будь яке число від 0 до 9:'));
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
}