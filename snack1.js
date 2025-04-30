//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(`Post non trovato`)
            }
        })
        .then(data => data.title);
}

getPostTitle(1)
    .then(title => {
        console.log("Titolo del post:", title);

    })
    .catch(error => {
        console.error("errore:", error.message);
    });