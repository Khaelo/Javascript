'use strict';
// Créez un cookie lang égal à 'fr'.
document.cookie = 'lang-fr';
// Créez un cookie previewSeen égal à true qui va expirer le lendement.
document.cookie = 'previewSeen=true;expires='+new Date('2019-02-12');
// Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.
docCookies.setItem('test', 'test', new Date('2019-12-31'));
// Créez un cookie userId égal à 123
docCookies.setItem('userId', 123);
// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('userId'), typeof docCookies.getItem('userId0'));
// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);
// Supprimez le cookie test.
docCookies.removeItem('userId');

//Stocker un objet
const user = {
    id: 1,
    name: 'Thibaud'
  }
docCookies.setItem('user', JSON.stringify(user));
const myObj = docCookies.getItem('user');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

//Local Storage
// Vérifiez si l'objet LocalStorage est supporté par le navigateur.
if (localStorage) {
    localStorage.setItem('greeting', 'Hello World');
    localStorage.setItem('greeting2', 'Hello World');
    localStorage.setItem('greeting3', 'Hello World');
    localStorage.getItem('greeting');
    localStorage.setItem('greeting', 'Welcom');
    localStorage.removeItem('greeting');
    localStorage.clear();
}
// Créez une entrée greeting égale à 'Hello World'. Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. Récupérez greeting. Modifiez cette entrée à 'Welcome'. Supprimez greeting du LocalStorage.

