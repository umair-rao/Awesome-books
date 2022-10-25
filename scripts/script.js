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
