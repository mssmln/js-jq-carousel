// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider


$(document).ready(function() {

  // code below
  var nextArrow = $('.next i');
  var prevArrow = $('.prev i');

  prevArrow.click(function() {

    // code below
    var img = $('.images img.active');

    img.removeClass('active');
    img.prev('.last').addClass('active');
  });


  nextArrow.click(function(){

    // code below
    var img = $('.images img.active'); // se lo scrivi sopra all'evento click funzionerà solo la prima volta

    img.removeClass('active');
    img.next().addClass('active');
  });

});
