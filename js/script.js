// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider


$(document).ready(function() {

  // dichiaro le variabili
  var nextArrow = $('.next i');
  var prevArrow = $('.prev i');
  var clickPallino = $('.nav i');


  // richiamo le funzioni
  nextArrow.click(next);
  prevArrow.click(prev);
  clickPallino.click(pallino);

});




function next(){
  // con questa funzione al click della freccia destra cambia la img e il pallino colorato
  var img = $('.images img.active');
  var pallino = $('.nav i.active');
  var firstImg = $('.images img.first');

  img.removeClass('active');
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
  // quando ci spostiamo verso sinistra cambia la img e il pallino colorato
  var img = $('.images img.active');
  var pallino = $('.nav i.active');

  img.removeClass('active');
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
  // ci spostiamo nello slider attraverso i pallini
  $('.active').removeClass('active');
  $(this).addClass('active');
  $('img').eq($(this).index()).addClass('active');
}
