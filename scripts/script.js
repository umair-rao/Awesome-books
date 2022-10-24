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
