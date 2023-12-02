const books = JSON.parse(dataInfo);

let container = document.querySelector('.container');
books.map(function(value) {
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    let img = document.createElement('img');
    img.id = value.id;
    img.height = value.height;
    img.width = value.width;
    img.src = value.img;
    bookContainer.appendChild(img);

    let titleEl = document.createElement('h4');
    titleEl.innerHTML = value.title;
    bookContainer.appendChild(titleEl);

    let autEl = document.createElement('h3');
    autEl.innerHTML = value.author;
    bookContainer.appendChild(autEl);

    container.appendChild(bookContainer);
});

