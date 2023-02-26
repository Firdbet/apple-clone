import $ from 'jquery';

$(document).ready(function(){
  var el = document.createElement("button");
  el.className = "plus-Sign";
  el.innerHTML = "+";
$(".lower-link h3").append(el);


if($(window).width() <= 768) {
  $(".lower-link").addClass("someClass");
} else {
  $(".lower-link").removeClass("someClass");
}

$(window).on("resize", function(){
  if($(window).width() <= 768) {
    $(".lower-link").addClass("someClass");
  } else {
    $(".lower-link").removeClass("someClass");
    $(".lower-link ul").show();
  }
});

$(document).on("click", ".someClass h3", function(){
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
});

$(".menu-logo").click(function() {
  // $(".top-link-wrapper").style.ba
    $(".top-link-wrapper").slideToggle();
})

  });


