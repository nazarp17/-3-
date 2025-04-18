<?php
$name = $age = $gender = $description = "";
$hobbies = [];
$errors = [];

function sanitize($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $errors['name'] = "Введіть ім’я.";
    } else {
        $name = sanitize($_POST["name"]);
    }

    if (empty($_POST["age"])) {
        $errors['age'] = "Введіть вік.";
    } else {
        $age = (int)$_POST["age"];
        if ($age < 10 || $age > 100) {
            $errors['age'] = "Вік повинен бути від 10 до 100.";
        }
    }

    if (empty($_POST["gender"])) {
        $errors['gender'] = "Оберіть стать.";
    } else {
        $gender = sanitize($_POST["gender"]);
    }

    if (!empty($_POST["hobbies"])) {
        $hobbies = array_map('sanitize', $_POST["hobbies"]);
    }

    if (!empty($_POST["description"])) {
        $description = sanitize($_POST["description"]);
    }

    if (empty($errors)) {
        echo "<!DOCTYPE html>
        <html lang='uk'>
        <head>
            <meta charset='UTF-8'>
            <title>Анкета надіслана</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; background-color: #f4f4f4; color: #333; }
                .result { background: #e2ffe2; padding: 20px; border-radius: 8px; max-width: 500px; }
            </style>
        </head>
        <body>
            <div class='result'>
                <h2>Анкета надіслана!</h2>
                <p><strong>Ім’я:</strong> $name</p>
                <p><strong>Вік:</strong> $age</p>
                <p><strong>Стать:</strong> $gender</p>
                <p><strong>Хобі:</strong> " . implode(", ", $hobbies) . "</p>
                <p><strong>Опис:</strong> $description</p>
            </div>
        </body>
        </html>";
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Анкета користувача</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
            background-color: #f4f4f4;
            color: #333;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 500px;
        }
        label, fieldset {
            display: block;
            margin-bottom: 15px;
        }
        input[type="text"],
        input[type="number"],
        textarea {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
        .error {
            color: red;
            font-size: 0.9em;
        }
        button {
            padding: 10px 20px;
            background-color: #0066cc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #004999;
        }
    </style>
</head>
<body>
    <h1>Анкета користувача</h1>
    <form method="post" action="">
        <label>Ім’я:
            <input type="text" name="name" value="<?= $name ?>">
            <span class="error"><?= $errors['name'] ?? '' ?></span>
        </label>

        <label>Вік:
            <input type="number" name="age" value="<?= $age ?>">
            <span class="error"><?= $errors['age'] ?? '' ?></span>
        </label>

        <fieldset>
            <legend>Стать:</legend>
            <label><input type="radio" name="gender" value="Чоловіча" <?= $gender === "Чоловіча" ? "checked" : "" ?>> Чоловіча</label>
            <label><input type="radio" name="gender" value="Жіноча" <?= $gender === "Жіноча" ? "checked" : "" ?>> Жіноча</label>
            <span class="error"><?= $errors['gender'] ?? '' ?></span>
        </fieldset>

        <fieldset>
            <legend>Хобі:</legend>
            <label><input type="checkbox" name="hobbies[]" value="Читання" <?= in_array("Читання", $hobbies) ? "checked" : "" ?>> Читання</label>
            <label><input type="checkbox" name="hobbies[]" value="Спорт" <?= in_array("Спорт", $hobbies) ? "checked" : "" ?>> Спорт</label>
            <label><input type="checkbox" name="hobbies[]" value="Музика" <?= in_array("Музика", $hobbies) ? "checked" : "" ?>> Музика</label>
            <label><input type="checkbox" name="hobbies[]" value="Геймінг" <?= in_array("Геймінгя", $hobbies) ? "checked" : "" ?>> Геймінг</label>
            <label><input type="checkbox" name="hobbies[]" value="Подорожі" <?= in_array("Подорожі", $hobbies) ? "checked" : "" ?>> Подорожі</label>
            <label><input type="checkbox" name="hobbies[]" value="Програмування" <?= in_array("Програмування", $hobbies) ? "checked" : "" ?>> Програмування</label>
        </fieldset>

        <label>Опис:
            <textarea name="description"><?= $description ?></textarea>
        </label>

        <button type="submit">Надіслати</button>
    </form>
</body>
</html>