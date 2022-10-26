import Collection from './book.js';

const collection = new Collection();

collection.getBooks();

function generateBookItem(book, index) {
  return `
  <li class=${index % 2 === 0 ? 'even' : 'odd'}>
    <p>${book.title} by ${book.author}</p>
    <button id=${book.id} class="remove-book">Remove</button>
  </li>
  `;
}

function generateBookCollection(collection) {
  let items = '';

  collection.forEach((book, index) => {
    items += generateBookItem(book, index);
  });
  return `
    <ul class="books-list">${items}</ul>
  `;
}

function render() {
  const bookConatiner = document.querySelector('.books-collection');
  bookConatiner.replaceChildren('');
  const books = generateBookCollection(collection.books);
  bookConatiner.insertAdjacentHTML('beforeend', books);

  const removeBtns = document.querySelectorAll('.remove-book');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      collection.remove(event.target.id);
      render();
    });
  });
}

window.addEventListener('load', render);

const formBook = document.querySelector('.addBook');

formBook.addEventListener('submit', (event) => {
  event.preventDefault();
  const { title, author } = formBook.elements;
  if (title.value && author.value) {
    const book = {
      title: title.value,
      author: author.value,
    };
    collection.add(book);
    render();
    title.value = '';
    author.value = '';
  }
});

const bookCollection = document.querySelector('.books-collection');
const contact = document.querySelector('.contact');
const formConatiner = document.querySelector('.add-book');

const listBtn = document.getElementById('list');
const addBtn = document.getElementById('add-new');
const contactBtn = document.getElementById('contact');

listBtn.addEventListener('click', () => {
  bookCollection.classList.add('show');
  formConatiner.classList.remove('show');
  contact.classList.remove('show');
  listBtn.classList.add('btn-show');
  addBtn.classList.remove('btn-show');
  contactBtn.classList.remove('btn-show');
});

addBtn.addEventListener('click', () => {
  formConatiner.classList.add('show');
  bookCollection.classList.remove('show');
  contact.classList.remove('show');
  addBtn.classList.add('btn-show');
  listBtn.classList.remove('btn-show');
  contactBtn.classList.remove('btn-show');
});

contactBtn.addEventListener('click', () => {
  contact.classList.add('show');
  bookCollection.classList.remove('show');
  formConatiner.classList.remove('show');
  contactBtn.classList.add('btn-show');
  listBtn.classList.remove('btn-show');
  addBtn.classList.remove('btn-show');
});

const time = document.querySelector('.date-time');
const now = new Date();
time.textContent = `${now}`;
