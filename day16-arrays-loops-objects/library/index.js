class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
}
};
  
const Library = [
    new Book('Hendrix the Dog', 'Gladys Horty', 20, 2019),
    new Book('Katherine the Ladder', 'Graham Tiles', 60, 2003),
    new Book('Robert the Goat', 'Henrietta Gutterballs', 40, 2020),
    new Book('Polly the Tyre', 'Richard Off', 40, 2016),
]

document.addEventListener('DOMContentLoaded', () => {
    const bookElm = document.querySelector('.books-list');

    for (const Book of Library) {
        const html = (
           `<div class="book">
           <span>${Book.title}</span>
           <span>${Book.author}</span>
           <span>${Book.pages}</span>
           <span>${Book.loanable}</span>
           <span>${Book.available}</span>` 
        )
        bookElm.innerHTML += html;
    }
});