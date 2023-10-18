const img = document.querySelector('img');
const button = document.querySelector('button');
const searchInput = document.querySelector('input')

function changeGif(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=Jz6csfuw3YE5MzaJQYxcdeAYCyVMkFpS&s=search', {mode: 'cors'})
    .then(function(response) {
        return response.json();
        })
        .then(function(response) {
        img.src = response.data.images.original.url;
        });
    button.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        if(searchTerm){
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Jz6csfuw3YE5MzaJQYxcdeAYCyVMkFpS&s=${searchTerm}`, {mode: 'cors'})
            .then(function(response) {
            return response.json();
            })
            .then(function(response) {
            img.src = response.data.images.original.url;
            button.disabled = false;
            button.style.backgroundColor = '#21262D';
            button.style.cursor = 'pointer';
            });
    
            button.disabled = true;
            button.style.backgroundColor = '#363B42';
            button.style.cursor = 'default';
        }
      });
}

export {
    changeGif,
}