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
  var clickPallino = $('.nav i');


  // richiamo la funzione next
  nextArrow.click(next);
  prevArrow.click(prev);
  clickPallino.click(pallino);

});




function next(){

  // code below
  var img = $('.images img.active'); // se lo scrivi sopra all'evento click funzionerà solo la prima volta
  var firstImg = $('.images img.first');

  img.removeClass('active');

  var pallino = $('.nav i.active');
  pallino.removeClass('active');



  if (img.hasClass('last')) {
    firstImg.addClass('active');
    $('.nav i.first').addClass('active');

  } else {
    img.next().addClass('active');
    pallino.next().addClass('active');

  }
}

function prev() {

  // code below
  var img = $('.images img.active');
  img.removeClass('active');
  var pallino = $('.nav i.active');
  pallino.removeClass('active');



  if (img.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');

  } else {
    img.prev().addClass('active');
    pallino.prev().addClass('active');

  }

}


function pallino() {

  // code below
  

}
