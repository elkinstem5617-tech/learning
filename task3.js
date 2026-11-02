const books = [
    {title:"War and peace", pages:1200},
    {title:"Mumu", pages:250},
    {title:"Duna", pages:330},
    {title:"Bibliya", pages:2000},
    {title:"Azbuka", pages:10},
];

const biggest = books.filter((book) => book.pages >= 300);
const titles = books.map((book) => book.title);
const sumPages = books.reduce((acc,book) => acc + book.pages, 0);
const smallest = books.filter ((book) => book.pages < 300);
const smallTitles = smallest.map((book) => book.title);

console.log(biggest);
console.log(titles);
console.log(sumPages);
console.log(smallTitles);