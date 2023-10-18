import gif from './giphy.gif';

const img = document.querySelector('img');
const button = document.querySelector('button');
const searchInput = document.querySelector('input');
const error = document.querySelector('span');

function changeGif() {
    function fetchGif() {
      const searchTerm = searchInput.value;
      if (searchTerm) {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Jz6csfuw3YE5MzaJQYxcdeAYCyVMkFpS&s=${searchTerm}`, { mode: 'cors' })
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            if (response.data.images && response.data.images.original) {
              img.src = response.data.images.original.url;
              button.disabled = false;
              button.style.backgroundColor = '#21262D';
              button.style.cursor = 'pointer';
              error.textContent = '';
            } else {
              error.textContent = 'No GIFs found for search.';
            }
          })
          .catch(function(error) {
            console.error('Ocorreu um erro na solicitação:', error);
          });

        button.disabled = true;
        button.style.backgroundColor = '#363B42';
        button.style.cursor = 'default';
      }
    }

    button.addEventListener('click', fetchGif);
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        fetchGif();
      }
    });
}

function firstGif(){
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Jz6csfuw3YE5MzaJQYxcdeAYCyVMkFpS&s=search`, { mode: 'cors' })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if (response.data.images && response.data.images.original) {
      img.src = response.data.images.original.url;
      button.disabled = false;
      button.style.backgroundColor = '#21262D';
      button.style.cursor = 'pointer';
    } else {
      img.src = gif;
    }
  })
}

export {
    changeGif,
    firstGif,
}