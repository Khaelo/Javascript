'use strict';

//Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.

$('#js-show-alert').click(() => {
  $('#js-alert').show(); //afficher
});
$('#js-hide-alert').click(() => {
  $('#js-alert').hide();
});

// Utilisez les méthodes slideUp, slideDown ou slideToggle pour afficher/cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.

$('#js-slide-example-address').click(() => {
    //$('#js-slide-example-links').slideDown(); //afficher
    //$('#js-slide-example-links').slideToggle(); //afficher/cacher
    $('#js-slide-example-links').fadeToggle();//afficher/cacher
  });

//   Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).

$('button#js-btn-fade-in').click(() => {
    $('div#js-div-fade-in-out').fadeIn();
})
$('button#js-btn-fade-out').click(() => {
    $('div#js-div-fade-in-out').fadeOut();
})

//Appliquez une animation au div #js-animation-1: ce <div> se deplace à 300px de gauche à droit en 700 millisecondes 3 secondes après la fin du rendu de la page. Utilisez les méthodes delay et animate.

$('div#js-animation-1')
.delay(300)
.animate({
    left: '300px',
    width: '200px'
}, 700)
.animate({
    height: '400px'
});