import Collection from './book.js';

const collection = new Collection();

collection.getBooks();

function generateBookItem(book) {
  return `
  <li>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id=${book.id} class="remove-book">Remove</button>
  </li>
  `;
}

function generateBookCollection(collection) {
  let items = '';

  collection.forEach((book) => {
    items += generateBookItem(book);
  });
  return `
    <ul>${items}</ul>
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
console.log(formBook);

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
