function scrollSpy() {
  var $scroll = $(window).scrollTop(),
  $height = ($('.nav').height()+1),
  $about = ($('#about').offset().top)-$height,
  $apply = ($('#apply').offset().top)-$height,
  $resume = ($('#resume').offset().top-$height),
  $interview = ($('#interview').offset().top)-$height,
  $winH = $(window).height(),
  $winW = $(window).innerWidth,
  $end = $('.footer').offset().top;
  if($winW > 435 && $winW < 1024) {
    $height = (($('.nav').height() + $('.nav-c').height())+1);
  }
  if($scroll > $about && $scroll < $apply) {
    $('.nav-c li').removeClass('active');
    $('.a').addClass('active');
  } else if($scroll > $apply && $scroll < $resume) {
    $('.nav-c li').removeClass('active');
    $('.b').addClass('active');
  } else if($scroll > $resume && $scroll < $interview) {
    $('.nav-c li').removeClass('active');
    $('.c').addClass('active');
  } else if($scroll > $interview && $scroll < $end) {
    $('.nav-c li').removeClass('active');
    $('.d').addClass('active');
  } else {
    $('.nav-c li').removeClass('active');
  }
};


function navChange() {
  var winW = window.innerWidth;
  var height = $('.nav').height();
  if(winW > 435 && winW < 1024) {
    var height = $('.nav').height()+$('.nav-c').height();
  }
  var scroll = $(window).scrollTop();
  if(scroll > height) {
    $('#home').prop('disabled', true);
    $('.brand img').attr('src','img/navbarimg.png');
  } else {
    $('#home').prop('disabled', false);
    $('.brand img').attr('src','img/navbarimg2.png');
  }
}
function size() {
  var winH = $(window).height();
  var winW = window.innerWidth;
  var height = $('.nav').height();
  var text = 436;
  $('.landing').css('height', winH);
  $('.main').css('min-height', winH);
  if(winW < 436) {
    text = 435;
  } else if (winW > 1023) {
    text = 1023;
  }
  if(winW > 435 && winW < 1024) {
    var height = $('.nav').height()+$('.nav-c').height();
  }
  $('body').css('marginTop', -height);
  if(text == 436) {
    $('.landingt').css('marginTop', height);
    $('.landingt i').removeClass('fa-3x');
  } else if(text == 1023){
    $('.landingt i').addClass('fa-3x');
  } else {
    $('.landingt').css('marginTop', '0px');
    $('.landingt i').removeClass('fa-3x');
  }
};
//Smooth Scroll
$('a[href^="#"]').click(function (e) {
  e.preventDefault();
  var s = $(window).scrollTop();
  var winW = window.innerWidth;
  var height = $('.nav').height();
  var target = this.hash;
  var $target = $(target);
  if(winW < 1024) {
    var height = 0;
    if(s > ($target.offset().top)) {
      if(winW < 436) {
        var height = $('.nav').height();
      } else {
        var height = ($('.nav').height()+$('.nav-c').height());
      }
    }
  }
  $('html, body').stop().animate({
      'scrollTop': ($target.offset().top-height)
  }, 900, 'swing');
});
$(document).ready(function() {
  scrollSpy();
  navChange();
  size();
  $(window).on( "orientationchange", function() {
    size();
  });
  $(window).resize(function() {
    size();
    navChange();
    scrollSpy();
  });
  $(window).scroll(function() {
    navChange();
    scrollSpy();
  });
});
