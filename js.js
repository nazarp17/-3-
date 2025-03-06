
const users = [
    { name: "Йосип", age: 14 },
    { name: "Василь", age: 17 },
    { name: "Юсуф", age: 30 },
    { name: "Іфпатій", age: 19 },
    { name: "Абдурахмат", age: 28 }
];

const adultUsers = users.filter(user => user.age > 18);


const userNames = users.map(user => user.name);

//  середній вік 
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// результат
console.log("Користувачі старше 18 років:", adultUsers);
console.log("Масив імен користувачів:", userNames);
console.log("Середній вік користувачів:", averageAge.toFixed(2));


/* 
                                                 Контрольні запитання


1.Основні методи роботи з масивами:
 • push(), pop(), shift(), unshift() – додавання/видалення елементів
 • map() – створює новий масив
 • filter() – фільтрує елементи
 • reduce() – обчислює значення на основі масиву
 • sort() – сортує масив
 • forEach() – виконує дію для кожного елемента
 2.Фільтрація масиву: 
    .const users = [{name: "Йосип", age: 25}, {name: "Йосипе", age: 17}];
    const adults = users.filter(user => user.age >= 18);
    console.log(adults);
3.Сортування масиву:
    .const numbers = [5, 2, 8, 1];
    numbers.sort((a, b) => a - b); // [1, 2, 5, 8]
4.Отримання ключів та значень об'єкта
    const user = {name: "Петрик", age: 25};
    console.log(Object.keys(user));   // ["name", "age"]
    console.log(Object.values(user)); // ["Петрик", 25]
5.Обчислення середнього арифметичного:
    const numbers = [10, 20, 30];
    const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    console.log(avg); //20 */ 