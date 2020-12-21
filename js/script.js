M.AutoInit();

// !Smooth Scrolling

document.querySelectorAll('.row').forEach((item) => {
  item.classList.add(
    'animate__animated',
    'animate__fadeIn',
    'animate__slower',
    'wow'
  );
});
// * sidenav
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

//* modal
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
//* scrollspy

// * discover

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
});

// Scrollfire

// const options = [
//   {
//     selector: '.row1',
//     offset: 50,
//     callback: function (el) {
//       Materialize.fadeInImage($(el));
//     },
//   },
//   {
//     selector: '.row2',
//     offset: 300,
//     callback: function (el) {
//       Materialize.fadeInImage($(el));
//     },
//   },
//   {
//     selector: '.row3',
//     offset: 400,
//     callback: function (el) {
//       Materialize.fadeInImage($(el));
//     },
//   },
// ];

// Materialize.scrollFire(options);

//* carousel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});
var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true,
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
});

//* collapsible

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// * slider
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

$(document).ready(function () {
  $('.slider').slider();
});
