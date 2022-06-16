let formFrame = document.querySelector('#form-book-block');
let addBtn = document.querySelector('#add-book-btn');
let cancelBtn = document.querySelector('#cancel-update-btn')
let updateNewBookBtn = document.querySelector('#update-btn');
let addNewBookBtn = document.querySelector('#add-book-form-btn');

addBtn.addEventListener('click', () => {
    if (formFrame.style.display === 'none') {
        formFrame.style.display = 'inline';
    } else {
        formFrame.style.display = 'none';
    }
})

cancelBtn.addEventListener('click', () => {
    let name = document.querySelector('input[name="name"]');
    let author = document.querySelector('input[name="author"]');
    let pictureUrl = document.querySelector('input[name="avatar"]');
    let linkRead = document.querySelector('input[name="link"]');
    name.value = '';
    author.value = '';
    pictureUrl.value = '';
    linkRead.value = '';
    formFrame.style.display = 'none';
    updateNewBookBtn.style.display = 'none';
    addNewBookBtn.style.display = 'inline';
})