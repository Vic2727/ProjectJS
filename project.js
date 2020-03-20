'use strict';

let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Ввведите дату в формате дд.мм.гггг","");

let expense1 = prompt("Введите обязательную статью расходов в этом месяце","");
let money1 = prompt("Во сколько это обойдется","");
let expense2 = prompt("Введите обязательную статью расходов в этом месяце","");
let money2 = prompt("Во сколько это обойдется","");


let appData = {
  budget: money,
  timeData: time,
  expenses: {
    [expense1]:money1,
    [expense2]:money2
  },
  optionalExpenses: {},
  income: [],
  saving: false
};

console.log(appData);
