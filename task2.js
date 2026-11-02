const books = [
    {title:"War and peace", pages:1200},
    {title:"Mumu", pages:250},
    {title:"Duna", pages:330},
    {title:"Bibliya", pages:2000},
    {title:"Azbuka", pages:10},
];

function isLong (book) {
    return book.pages > 300;
};
let totalPages = 0;
for (const book of books) {
    if (isLong(book)){
        console.log(`${book.title}: длинная`);
    } else {
        console.log(`${book.title}: короткая`);
    }
    totalPages += book.pages;
};
console.log(totalPages);