import chalk from "chalk";
import { isLong, getTitles } from "./utils.js";

const books = [
  { title: "War and peace", pages: 1200 },
  { title: "Mumu", pages: 250 },
  { title: "Duna", pages: 330 },
];

const longBooks = books.filter(isLong);

console.log(chalk.green("Длинные книги"));
console.log(getTitles(longBooks));