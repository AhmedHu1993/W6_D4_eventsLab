document.addEventListener('DOMContentLoaded', () => {


  const handleFormSubmit = function (event) {
    event.preventDefault()
    // console.log(event);
    const readingResult = document.querySelector('#reading-list');

      const newListItem = document.createElement('li');

      newListItem.textContent = `Title: ${event.target.title.value}`+'/' +
       ` Author: ${event.target.author.value}`+'/' +
        ` Category:${event.target.category.value}`;
      readingResult.appendChild(newListItem);

      document.getElementById('new-item-form').reset()

  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',handleFormSubmit)



  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete list";
  const readingList = document.querySelector('#reading-list');
  const body = document.querySelector('body');

  body.appendChild(deleteButton);

  const handleButtonClick = function () {
    const listItem = document.querySelector('li')

    while (readingList.firstChild) {
      readingList.removeChild(readingList.firstChild)
    }

  }

  deleteButton.addEventListener('click', handleButtonClick)


  ;
})
