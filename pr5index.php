-- 1
INSERT INTO staff (first_name, last_name, position, hire_date, salary) VALUES
('Олег', 'Шум', 'менеджер', '2022-03-01', 25000.00),
('Йосип', 'Леонтович', 'аналітик', '2023-01-15', 22000.00),
('Василь', 'Баршмала', 'розробник', '2021-06-20', 30000.00),
('Бардшихам', 'Куанджи', 'менеджер', '2020-10-05', 27000.00),
('Абдурахмат', 'Айлудинов', 'тестувальник', '2022-08-12', 21000.00);

-- 2
INSERT INTO work_schedules (employee_id, work_day, shift) VALUES
(1, '2025-04-22', 'ранкова'),
(1, '2025-04-23', 'денна'),
(2, '2025-04-22', 'нічна'),
(2, '2025-04-23', 'ранкова'),
(3, '2025-04-22', 'денна'),
(3, '2025-04-23', 'нічна'),
(4, '2025-04-22', 'ранкова'),
(4, '2025-04-23', 'денна'),
(5, '2025-04-22', 'нічна'),
(5, '2025-04-23', 'ранкова');


INSERT INTO benefits (employee_id, benefit_type, value) VALUES
(1, 'медстрахування', 3000.00),
(3, 'спортзал', 1500.00),
(4, 'медстрахування', 3200.00);

  
INSERT INTO evaluations (employee_id, evaluation_date, score) VALUES
(1, '2025-03-31', 85),
(2, '2025-03-31', 78),
(3, '2025-03-31', 92),
(4, '2025-03-31', 88),
(5, '2025-03-31', 75);


UPDATE staff
SET position = 'старший менеджер'
WHERE id = 1;


UPDATE benefits
SET value = 3500.00
WHERE employee_id = 1 AND benefit_type = 'медстрахування';


DELETE FROM staff
WHERE id = 5;


SELECT * FROM work_schedules WHERE employee_id = 5;


SELECT * FROM benefits WHERE employee_id = 5;
SELECT * FROM evaluations WHERE employee_id = 5;

SELECT * FROM staff;

SELECT * FROM staff
WHERE position = 'менеджер';

SELECT * FROM staff
ORDER BY salary DESC;

-- працівники із зарплатою більше 20000
SELECT * FROM staff
WHERE salary > 20000;
