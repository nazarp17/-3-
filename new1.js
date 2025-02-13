// завдання 1:оголошення змінних з різними типами даних
let integerNumber = 10;   
let floatNumber = 5.5; 
let text = "Слава Україні";       
let isTrue = true;        

console.log("Початкові значення:");
console.log(`integerNumber: ${integerNumber}, тип: ${typeof integerNumber}`);
console.log(`floatNumber: ${floatNumber}, тип: ${typeof floatNumber}`);
console.log(`text: ${text}, тип: ${typeof text}`);
console.log(`isTrue: ${isTrue}, тип: ${typeof isTrue}`);

// зміна значень змінних
integerNumber = "20";  
floatNumber = false;  
text = 100;            
isTrue = "false";      

console.log("\nПісля зміни значень:");
console.log(`integerNumber: ${integerNumber}, тип: ${typeof integerNumber}`);
console.log(`floatNumber: ${floatNumber}, тип: ${typeof floatNumber}`);
console.log(`text: ${text}, тип: ${typeof text}`);
console.log(`isTrue: ${isTrue}, тип: ${typeof isTrue}`);

// перетворення типів і результатів
console.log("\nПеретворення типів:");
console.log(`Конкатенація числа і рядка: ${integerNumber + text} (тип: ${typeof (integerNumber + text)})`);
console.log(`Перетворення true у число: ${Number(true)}`);
console.log(`Перетворення false у число: ${Number(false)}`);
console.log(`Перетворення "false" у число: ${Number("false")}`); // NaN

// створення об'єкта з різними типами даних
let myObject = {
    number: 42,
    text: "Example",
    isBoolean: false,
    nestedObject: {
        key: "value"
    },
    array: [1, 2, 3]
};

// виведення об'єкта у вигляді JSON
console.log("\nОб'єкт у форматі JSON:");
console.log(JSON.stringify(myObject, null, 2));





// завдання 2:запит трьох чисел у користувача
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let num3 = parseFloat(prompt("Введіть третє число:"));

// обчислення середнього арифметичного
let average = (num1 + num2 + num3) / 3;
console.log(`Середнє арифметичне: ${average}`);

// арифметичні операції
console.log("\nАрифметичні операції:");
console.log(`Модуль першого числа: ${Math.abs(num1)}`);
console.log(`Модуль другого числа: ${Math.abs(num2)}`);
console.log(`Модуль третього числа: ${Math.abs(num3)}`);

console.log(`Округлення першого числа у більшу сторону: ${Math.ceil(num1)}`);
console.log(`Округлення другого числа у більшу сторону: ${Math.ceil(num2)}`);
console.log(`Округлення третього числа у більшу сторону: ${Math.ceil(num3)}`);

console.log(`Округлення першого числа у меншу сторону: ${Math.floor(num1)}`);
console.log(`Округлення другого числа у меншу сторону: ${Math.floor(num2)}`);
console.log(`Округлення третього числа у меншу сторону: ${Math.floor(num3)}`);

console.log(`Перше число у квадраті: ${Math.pow(num1, 2)}`);
console.log(`Друге число у квадраті: ${Math.pow(num2, 2)}`);
console.log(`Третє число у квадраті: ${Math.pow(num3, 2)}`);

// перевірка чи діляться без залишку на 5, 7
let checkDivisibility = (num, divisor) => num % divisor === 0;

console.log("\nПеревірка подільності:");
console.log(`Чи ділиться ${num1} на 5 без залишку? ${checkDivisibility(num1, 5)}`);
console.log(`Чи ділиться ${num2} на 5 без залишку? ${checkDivisibility(num2, 5)}`);
console.log(`Чи ділиться ${num3} на 5 без залишку? ${checkDivisibility(num3, 5)}`);

console.log(`Чи ділиться ${num1} на 7 без залишку? ${checkDivisibility(num1, 7)}`);
console.log(`Чи ділиться ${num2} на 7 без залишку? ${checkDivisibility(num2, 7)}`);
console.log(`Чи ділиться ${num3} на 7 без залишку? ${checkDivisibility(num3, 7)}`);

// перевірка 
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log("\nПеревірка існування трикутника:");
if (isValidTriangle(num1, num2, num3)) {
    console.log("Трикутник з такими сторонами існує.");
} else {
    console.log("Трикутник з такими сторонами НЕ існує.");
}



// 3 завдання 

let nums = [
    parseInt(prompt("Введіть перше число:")),
    parseInt(prompt("Введіть друге число:")),
    parseInt(prompt("Введіть третє число:"))
];

//  визначення min,max
let maxNum = Math.max(...nums);
let minNum = Math.min(...nums);
console.log(`Найбільше число: ${maxNum}`);
console.log(`Найменше число: ${minNum}`);

//  перевірка чи хоча б одне число є парним
let hasEven = nums.some(num => num % 2 === 0);
console.log(`Хоча б одне число парне: ${hasEven}`);

//  перевірка складної умови: (num1 > num2) && (num2 < num3)
let conditionCheck = nums[0] > nums[1] && nums[1] < nums[2];
console.log(`Перша більше другої, а друга менше третьої: ${conditionCheck}`);

//  функція перевірки простого числа
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// перевірка чи є кожне число простим
console.log("\nПеревірка на просте число:");
nums.forEach(num => console.log(`${num} -> ${isPrime(num) ? "Просте" : "Не просте"}`));



// 4 завдання:отримання даних від користувача
let name = prompt("Введіть ваше ім'я:");
let birthYear = parseInt(prompt("Введіть ваш рік народження:"));
let city = prompt("Введіть місто проживання:").trim().toLowerCase();

// розрахунок віку
const currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`Привіт, ${name}! Вам ${age} років.`);


let ageGroup =
    age < 12 ? "дитина" :
    age < 18 ? "підліток" :
    age < 60 ? "дорослий" :
    "літня людина";

console.log(`Ви належите до вікової групи: ${ageGroup}.`);

//перевірка чи є місто столицею
const capitals = {
    "Україна": "Київ",
    "Зімбабве": "Хараре",
    "Португалія": "Порто",
    "Німеччина": "Берлін",
    "Нідерланди": "Гаага",
    "Нігер": "Ніамей"
};

let isCapital = Object.values(capitals).includes(city);
console.log(isCapital ? `Ваше місто ${city} є столицею.` : `Ваше місто ${city} не є столицею.`);



// контрольні запитання:
// 1.Особливості оголошення змінних: var: функціональна область видимості, піднімається, можна переоголошувати.
//let: блочна область видимості, не піднімається, не можна переоголошувати.
//const: блочна область видимості, не можна переоголошувати чи змінювати значення після ініціалізації.
// 2.Операції з рядками:Конкатенація, довжина (length), доступ до символів ([]), методи (toUpperCase, slice, replace тощо).
// 3.Різниця між == і ===:  == порівнює з приведенням типів (5 == "5" → true).
//                          === порівнює без приведення типів (5 === "5" → false).
// 4.Логічні оператори: && (І), || (АБО), ! (НЕ). Використовують коротке замикання.
// 5. Перевірити на просте число можна за допомогою коду:
// function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
 // Висновки:
// Під час виконання завдань я поглибив свої знання про оголошення змінних у JavaScript, 
//особливості роботи з рядками, різницю між строгим та нестрогим порівнянням,а також логічні оператори.
// труднощі були і не мало але якось справився
