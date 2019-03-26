$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll > $('.intro').offset().top - 640) {
    $('.plane').addClass('fadeslide');
  }
  if (wScroll > $('.gallery').offset().top - 640) {
    $('.gallery').addClass('fadeSlide');
  }
  if (wScroll > $('.wish').offset().top - 640) {
    $('.f').addClass('slideright');
    $('.fi').addClass('slideleft');
  }
});
