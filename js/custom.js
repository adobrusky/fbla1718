function changeSrc(index) {
  console.log(index);
  if (index == 0) {
    newSrc = 'https://www.youtube.com/embed/Rdi-SNhe2v4'
  } else if (index == 1) {
    newSrc = 'https://www.youtube.com/embed/B7SoNGxJVc8'
  } else {
    newSrc = 'https://www.youtube.com/embed/SieNfciN274'
  }
  var iframe = $('.video');
  iframe.attr('src', newSrc);
};


$(document).ready(function() {
  $('.submit').click(function() {
    var state = $("#state option:selected").val();
    var city = $("#city").val();
    var salary = $("#salary option:selected").val();
    var field = $("#field option:selected").val();
    var education = $("#education option:selected").val();
    var job_type = $("#job-type option:selected").val();
    if (state == "1" && city == "Seward" && salary == "8" && field == "6" && education == "5" && job_type == "1") {
      $('.no-result').css('display', 'none');
      $('.result').each(function() {
        if ($(this).hasClass('no-result') == false) {
          $(this).css('display', 'flex');
        }
      });
    } else {
      $('.result').css('display', 'none');
      $('.no-result').css('display', 'flex');
    }
  });
  $('.indicator').hover(function() {
    if(($(this).hasClass('active-indicator')) == false) {
      $(this).find('i').removeClass('fa-circle-o').addClass('fa-circle');
    };
  }, function() {
    if(($(this).hasClass('active-indicator')) == false) {
      $(this).find('i').removeClass('fa-circle').addClass('fa-circle-o');
    };
  });

  $('.videoControl').click(function() {
    var index = $(this).index();
    changeSrc(index);
  });
});
