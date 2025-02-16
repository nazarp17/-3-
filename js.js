// Завдання 1 оголошення функції
function greet(name) {
    console.log(`Слава Україні, ${name}!`);
}

// Виклики функції
greet("Йосип");
greet("Василь");
greet("Петрик");

// Завдання 2 Функція для обчислення суми
function sum(a, b) {
    return a + b;
}

// виклики функції
console.log(sum(5, 7));  
console.log(sum(10, 15)); 5

// Завдання 3
const squareArray = (arr) => arr.map(num => num * num);

// перевірка функції
console.log(squareArray([1, 2, 3, 4, 5])); 

// Завдання 4 калькулєйтет
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Ділення на нуль неможливе";
        default:
            return "Невідома операція";
    }
}

// Виклики функції
console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 0, "/"));  
console.log(calculate(8, 2, "*"));  
console.log(calculate(9, 3, "-"));  
console.log(calculate(5, 5, "="));  

// Завдання 5 Фільтрація масиву слів
function filterLongWords(words, n) {
    return words.filter(word => word.length > n);
}

// перевірка функції
console.log(filterLongWords(["яблуко", "банан", "ананас", "кіт", "сонце"], 5));
// виведе слова "яблуко", "банан", "ананас"
