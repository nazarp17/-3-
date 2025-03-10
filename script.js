document.addEventListener("DOMContentLoaded", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultElement = document.getElementById("result");
    const historyList = document.getElementById("history");
    const clearHistoryBtn = document.getElementById("clearHistory");

    // Завантаження історії з localStorage
    loadHistory();

    // Додаємо обробник для кнопок операцій
    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", () => calculate(button.dataset.op));
    });

    // Обробка натискання Enter в полях введення
    num1.addEventListener("keydown", handleEnterKey);
    num2.addEventListener("keydown", handleEnterKey);

    // Очищення історії
    clearHistoryBtn.addEventListener("click", clearHistory);

    function calculate(operation) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        let result;

        // Перевірка коректності введених даних
        if (isNaN(n1)) {
            alert("Введіть перше число!");
            return;
        }
        if (operation !== "√" && isNaN(n2)) {
            alert("Введіть друге число!");
            return;
        }

        // Виконання операцій
        switch (operation) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            case "/":
                if (n2 === 0) {
                    alert("Помилка: Ділення на нуль!");
                    return;
                }
                result = n1 / n2;
                break;
            case "%":
                result = n1 % n2;
                break;
            case "^":
                result = Math.pow(n1, n2);
                break;
            case "√":
                if (n1 < 0) {
                    alert("Помилка: Корінь з від'ємного числа!");
                    return;
                }
                result = Math.sqrt(n1);
                break;
            default:
                alert("Невідома операція");
                return;
        }

        // Відображення результату
        resultElement.textContent = result;

        // Додавання до історії
        addToHistory(`${n1} ${operation} ${n2 !== undefined ? n2 : ''} = ${result}`);
    }

    function addToHistory(entry) {
        const li = document.createElement("li");
        li.textContent = entry;
        historyList.prepend(li);

        // Збереження історії в localStorage
        let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
        history.unshift(entry);
        localStorage.setItem("calcHistory", JSON.stringify(history));
    }

    function loadHistory() {
        let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
        history.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = entry;
            historyList.appendChild(li);
        });
    }

    function clearHistory() {
        localStorage.removeItem("calcHistory");
        historyList.innerHTML = "";
    }

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            document.querySelector(".buttons button").click();
        }
    }
});