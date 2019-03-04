'use strict';

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.

let counter = 0;

$('#js-btn').click(() => {
    console.log('Clicked');
    counter++;
    if(counter > 5){
        $('#js-btn').off('click');
    }
    console.log('counter:', counter)
});

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu.

$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green');
});
$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue');
});

// Si le paragraphe avec l'id js-tooltip-wrapper est survolé, affichez le span avec l'id js-tooltip. Si il n'est plus survolé, cachez le span.

$('p#js-tooltip-wrapper').mouseenter(() => {
    $('span#js-tooltip').css('display', 'inline');
})
$('p#js-tooltip-wrapper').mouseleave(() => {
    $('span#js-tooltip').css('display', 'none');
})
