// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilitaErrore = Math.random();
            if (probabilitaErrore < 0.2) {
                reject('il dado si è incastrato');
            } else {
                const numero = Math.floor(Math.random() * 6) + 1;
                resolve(numero);
            }
        }, 3000)
    });
}

lanciaDado()
    .then(numero => {
        console.log("Hai lanciato:", numero);
    })
    .catch(errore => {
        console.errore("errore:", errore);
    });