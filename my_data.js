#!/usr/bin/env node    
// Разрешаем запускать этот файл без указания пути к node:    package.json (bin) + 'npm link'

// cmd current
// cmd current --year или cmd current -y
// cmd add -d 2
// cmd sub -d 2

// Используем пакет yargs
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'Текущий год',
        default: false
    })
    .option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'Текущий месяц',
        default: false
    })
    .option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'Дата в календарном месяце',
        default: false
    })
    .argv;      // Получили параметры командной строки

// console.log(argv);

// Определяем тип преобразования даты
let type = '';

if (argv._.indexOf('current') > -1)
    type = 'current';
else if (argv._.indexOf('add') > -1)
    type = 'add';
else if (argv._.indexOf('sub') > -1)
    type = 'sub';

// Параметер - смещение от текущей даты
let offset = 0;
if (argv._.length > 1)
{
    offset = argv._[1];

    if (type == 'sub')
        offset = -offset;
}


// Формируем дату
let v = new Date();

switch(type)
{
    case 'current':

        if (argv.year)
            console.log(v.getFullYear().toString());
        else if (argv.month)
            console.log((v.getMonth() + 1).toString());
        else if (argv.date)
            console.log(v.getDate().toString());
        else
            console.log(v.toISOString());

        break;
        
    case 'add':
    case 'sub':

        if (argv.year)
            v.setFullYear(v.getFullYear() + offset);
        else if (argv.month)
            v.setMonth(v.getMonth() + offset);
        else if (argv.date)
            v.setDate(v.getDate() + offset);

        console.log(v.toISOString());

        break;
}
