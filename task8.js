import { getUsers } from "./api.js";  // импортирует функцию getUsers из api.js, которая собирает массив данных с сайта
import { readFile, writeFile } from "node:fs/promises"; // импортирует две встроенные функции для чтения и записи

async function main() {

    const users = await getUsers(); // присваивает данные из getUsers в переменную users

    const usersNameMail = users.map(({ name, email, address: { city } }) => ({ name, email, city })); // создает новый массив только из имени, города и емейла

    const textUsers = JSON.stringify(usersNameMail, null, 2); // превращает массив в строку

    const fileName = "users.json"; // присваивает переменной название файла

    try {
        await writeFile(fileName, textUsers, "utf-8"); // записывает строка в файл

        const text = await readFile(fileName, "utf-8"); // возвращает из файла текст

        const arrayFromText = JSON.parse(text); // переделывает строки в объекты и присвает в переменную
        console.log(arrayFromText.length); // выводит кол-во человек

    } catch (error) {
        console.log("error", error.message); // ну если ошибка то выведет это
    }
};

main()