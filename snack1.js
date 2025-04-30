//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

//Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(`Post non trovato`)

            }
            return response.json();

        })
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => {
                    if (!response.ok) {
                        return Promise.reject('Utente non trovato');
                    }
                    return response.json();
                })
                .then(user => {
                    post.user = user;
                    return post;
                });
        });
}

getPost(1)
    .then(post => {
        console.log("Post completo:", post);

    })
    .catch(error => {
        console.error("errore:", error);
    });