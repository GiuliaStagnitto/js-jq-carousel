$(document).ready(function(){
  var nextButton = $('.next');
  var prevButton = $('.prev');

  nextButton.click(function nextImg(){

    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');

    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');
        // se l'immagine che è attiva ha la classe last
        // devo selezionare first
    if (imgActive.hasClass('last') == true) {
      $('.slider-wrapper img.first').addClass('active');
      $('.slider-wrapper i.first').addClass('active');
    } else {
      imgActive.next().addClass('active');
      iActive.next().addClass('active');
    }
  });
  prevButton.click(function prevImg(){

    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');

    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');
        // se l'immagine che è attiva ha la classe last
        // devo selezionare first
    if (imgActive.hasClass('first') == true) {
      $('.slider-wrapper img.last').addClass('active');
      $('.slider-wrapper i.last').addClass('active');

    } else {
      imgActive.prev().addClass('active');
      iActive.prev().addClass('active');
    }
  });

});
// sto coso non funziona
$(document).keydown(function(){
  var key = event.keyCode;
  if (key == 39 || key == 100) {
    nextImg();
  } else if (key == 37 || key == 102) {
    prevImg();
  }
});
