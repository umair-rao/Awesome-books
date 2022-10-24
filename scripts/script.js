let collection = [
  {
    id: '1',
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    id: '2',
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
];

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

function removeBook(id) {
  collection = collection.filter((b) => b.id !== id);
}

function addBook(book) {
  let format = {...book, id: String(Math.random())};
  collection.push(format);
  render();
}

const formBook = document.querySelector('.addBook');

formBook.addEventListener('submit',(event)=> {
  event.preventDefault();
  const {title, author} = formBook.elements;
  if (title.value && author.value) {
    const book =  {
      title: title.value,
      author: author.value,
    };
    addBook(book);
    title.value = '';
    author.value = '';
  }
});

function render() {
  const bookConatiner = document.querySelector('.books-collection');
  bookConatiner.replaceChildren('');
  const books = generateBookCollection(collection);
  bookConatiner.insertAdjacentHTML('beforeend', books);

  const removeBtns = document.querySelectorAll('.remove-book');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      removeBook(event.target.id);
      render();
    });
  });
}

window.addEventListener('load', render);
