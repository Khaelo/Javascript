'use strict';

//Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez et logguez la valeur qu'elle retourne.

const myPromise = new Promise((resolve, reject) => {
    resolve('Hello');
});
myPromise.then(result => console.log('result', result));

//Créez une promise qui retourne une chaîne de caractères 'Hello' dans 3 secondes. Récupérez et logguez la valeur qu'elle retourne.

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
}, 3000)
});
myPromise2.then(result => console.log('result', result));

//Créez une promise qui retourne une erreur 'Something went wrong!'. Récupérer et logguez cette erreur.

const myPromise3 = new Promise((resolve, reject) => {
    reject('Something went wrong!');
});
myPromise3
.then(res => console.log(res))
.catch(error => console.error(error));

//Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:
//multiplier N par 2
//ensuite decrementer de 2
//ensuite augmenter de 10.
// Logguez le résultat réçu.

const getNum = new Promise((resolve, reject) => {
    resolve(10);
    //reject('Error');
});
getNum
.then(num => num * 2)
.then(num => num - 1)
.then(num => num -= 2)
.then(num => num += 10)
.then(num => {
    console.log('result',num);
})
.catch(error => {
    console.error(error)
})

//Créez une fonction qui prend un nombre comme parametre et qui retourne une promise.
// Si le nombre passé est supérieur à 5 la promise est résolue avec succès, sinon la promise retourne une erreur 'Le nombre passé est trop grand'.
// Appelez la fonction créée et récupérez la valeur retournée par la promise.

function myFunc (num) {
    return new Promise((resolve, reject) => {
        if (num < 5) {
            resolve(num);
        } if (num > 5) {
            reject('Le nombre passé est trop grand');
         }
    })
}
myFunc(1);

//Placeholder API: https://jsonplaceholder.typicode.com/
//Récupérez et affichez un article avec l'id 25, ensuite récupérez et affichez ses commentaires.

fetch('https://jsonplaceholder.typicode.com/posts/25')
    .then(response => response.json())
.then(result => {
    console.log('result',result);
    fetch('https://jsonplaceholder.typicode.com/comments/25')
        .then(response2 => response2.json())
.then(comments => {
    console.log('result', result)
})
});

//Créez un formulaire d'inscription. A la soumission du formulaire envoyez une requête pour créez un nouvel utilisateur.
// Sauvegardez ces données dans les cookies.

const userdata = {
    email: 'test@ynov.com',
    password: 'azerty'
}
fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
.then(result => console.log('result', result));

//Utilisez l'API de https://reqres.in/ et la méthode fetch qui retourne une promise.
//Récupérez et affichez les informations de l'utilisateur avec l'id 5.

const user5 = fetch('https://reqres.in/api/users?id=5');
console.log(user5);

//Modifier les données d'un utilisateur en utilisant l'API de https://reqres.in/

const userData = {
    name: 'Toto'
}