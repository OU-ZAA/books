// Add a book to the list
const addBook = document.querySelector('button');
console.log(addBook);

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    let value = document.querySelector('input').value;
    if (value === '') return;

    // Creating elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Adding content
    bookName.textContent = value;
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('delete');

    // Appending elements 
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li)

    // clear input value
    value = '';
    
});

const list = document.querySelector('ul');

// Options for the observer (which mutations to observe)
const config = { childList: true };

const callback = mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            Array.from(list.children)
                .map(node => {
                    node.children[1].addEventListener('click', (e) => {
                        e.preventDefault();
                        node.children[1].parentElement.remove();
                    });
                });
        }
    });
}
const observer = new MutationObserver(callback);
observer.observe(list, config);