// 1 завдання: перевірка віку
let age = prompt("Введіть ваш вік:");

if (age !== null) {
    age = Number(age);

    if (isNaN(age)) {
        alert("Введіть коректне число.");
    } else if (age < 18) {
        alert("Вам заборонено вхід.");
    } else if (age >= 18 && age <= 60) {
        alert("Ласкаво просимо!");
    } else {
        alert("Ви надто старі, час на пенсію!");
    }
} else {
    alert("Введення скасовано.");
}

// 2 завдання: введення парних чисел і їх даних
let n = prompt("Введіть число n");

if (n !== null) {
    n = Number(n);

    if (isNaN(n) || n < 2) {
        console.log(" введіть коректне число більше або рівне 2.");
    } else {
        console.log(`Парні числа від 2 до ${n}:`);
        for (let i = 2; i <= n; i += 2) {
            console.log(i);
        }let age = prompt("Введіть ваш вік:");

        if (age !== null) {
            age = Number(age);
        
            if (isNaN(age)) {
                alert("Введіть коректне число.");
            } else if (age < 18) {
                alert("Вам заборонено вхід.");
            } else if (age >= 18 && age <= 60) {
                alert("Ласкаво просимо!");
            } else {
                alert("Ви надто старі, час на пенсію!))");
            }
        } else {
            alert("Введення скасовано.");
        }
        
    }
} else {
}
 {
console.log("Введення числа")
 }

// 3 завдання: обчислення факторіалу числа 
let num = prompt("Введіть число для обчислення факторіалу:");

if (num !== null) {
    num = Number(num);

    if (isNaN(num) || num < 0) {
        console.log("Будь ласка, введіть коректне невід'ємне число.");
    } else {
        let factorial = 1;
        let i = 1;

        while (i <= num) {
            factorial *= i;
            i++;
        }

        console.log(`Факторіал числа ${num} дорівнює ${factorial}`);
    }
} else {
    console.log("Введення скасовано.");
}
// 4 завдання: калькулейтет
let a = prompt("Введіть перше число:");
let b = prompt("Введіть друге число:");
let operation = prompt("Введіть операцію (+, -, *, /):");

if (a !== null && b !== null && operation !== null) {
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        alert("Будь ласка, введіть коректні числа.");
    } else {
        let result;

        switch (operation) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if (b !== 0) {
                    result = a / b;
                } else {
                    alert("Ділення на нуль неможливе!");
                    result = "Помилка";
                }
                break;
            default:
                alert("Невідома операція!");
                result = "Помилка";
        }

        alert(`Результат: ${result}`);
    }
} else {
    alert("Введення скасовано.");
}
// 5 завдання: 
const secretNumber = Math.floor(Math.random() * 100) + 1; 
let guess;
let attempts = 0;

do {
    guess = prompt("Вгадайте число від 1 до 100:");
    
    if (guess === null) {
        alert("Гру скасовано.");
        break;
    }

    guess = Number(guess);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Будь ласка, введіть число від 1 до 100.");
    } else if (guess < secretNumber) {
        alert("Загадане число більше.");
    } else if (guess > secretNumber) {
        alert("Загадане число менше.");
    } else {
        alert(`Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб.`);
        break;
    }
} while (true);