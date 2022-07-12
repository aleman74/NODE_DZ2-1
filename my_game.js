#!/usr/bin/env node    
// Разрешаем запускать этот файл без указания пути к node:    package.json (bin) + 'npm link'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const max_value = 100;
const num = Math.floor(Math.random() * max_value);    // random

console.log(`Загадано число в диапазоне от 0 до ${max_value}`);

rl.on('line', (input) => {

    let v = +input;    // Преобразуем к числу

    if (v == num)
    {
        console.log(`Отгадано число ${num}`);
        rl.close();
    }
    else if (v > num)
        console.log('Меньше');
    else
        console.log('Больше');
});




/*
rl.question("What do you think of node.js? 1", (answer) => {

  console.log("Thank you for your valuable feedback.");
  console.log("Your choose 1: " + answer);

  rl.close();
});

*/  
