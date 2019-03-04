'use strict';

//toutes les balises <div>

$('div');
console.log('all divs', $('div'));

//toutes les balises avec le nom de classe js-paragraph

$('.js-paragraph');
console.log('all js-paragraph', $('.js-paragraph'));

//le premier <th> du premier <tr>

console.log('le permier <th> du premier <tr>', $('tr:first th:first'));

//le premier <td> de chaque <tr>

console.log('le premier <td> de chaque <tr>', $('tr td:first'));

//tous les liens

console.log('tous les liens', $('a'));

//tous les liens externes (ceux qui ont l'attribut égale à _blank)

console.log('tous les liens externes' ,$('a[target="_blank]'));

//tous les liens internes (ceux qui n'ont pas l'attribut égale à _blank)

console.log('tous les liens internes', $('a[target!="_blank"]'));

//tous les boutons dans un formulaire

$(document).ready(() => {
    
    console.log('tous les boutons dans un formulaire', $('form :button'));
});