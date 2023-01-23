/* Перше */

let USER_AGE = Number(prompt('Введіть ваш вік:'));
if (USER_AGE > 0 && USER_AGE <= 12){
alert('Ви дитина');
} else if (USER_AGE > 12 && USER_AGE <= 18){
  alert('Ви підліток');
} else if (USER_AGE > 18 && USER_AGE <= 60){
  alert('Ви дорослий');
} else if (USER_AGE >= 60 && USER_AGE < 120){
  alert('Ви пенсіонер');
} else if (USER_AGE > 120){
  alert('Ви ввели невірний вік');
}