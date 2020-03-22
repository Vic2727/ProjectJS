'use strict';

let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Ввведите дату в формате дд.мм.гггг","");



let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

let expense1 = prompt("Введите обязательную статью расходов в этом месяце","");
let money1 = prompt("Во сколько это обойдется","");
let expense2 = prompt("Введите обязательную статью расходов в этом месяце","");
let money2 = prompt("Во сколько это обойдется","");

appData.expenses [expense1] = money1;
appData.expenses [expense2] = money2;

alert("Ваш ежедневный бюджет " + ((money - money1 - money2)/30));


console.log(appData);
