//array collection to hold objects
const myLibrary = [];

const dialog = document.querySelector("#dialog");
const newBookBtn = document.querySelector("#newBook");
newBookBtn.addEventListener("click", () => {
dialog.showModal();
});
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages);
        addBookToLibrary(newBook);
        dialog.close();
    } else {
        alert("Please fill in all the required inputs");
    }
});

const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
    dialog.close();
})

//constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    renderLibrary();
}

//we want the individual indices in wtihin the object to populate into the book collection
//so we are going to create cards that get appended to the collection everytime we make an input

function makeCard(book, index){
const collection = document.getElementById("Collection");
const card = document.createElement("div");
card.classList.add("book-card");

card.innerHTML = `
<h2>${book.title}</h2>
<p>Author: ${book.author}</p>
<p>Pages: ${book.pages}</p>
<button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
`;
collection.appendChild(card);
}

function renderLibrary() {
    const collection = document.getElementById("Collection");
    collection.innerHTML = "";
    myLibrary.forEach((book, index) => {
        makeCard(book, index);
    });
}
