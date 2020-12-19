M.AutoInit();

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
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});
var instance = M.ScrollSpy.getInstance(elem);
function find(id) {
  return 'a[href="#' + id + '"]';
}
$(document).ready(function () {
  $('main').pushpin({
    top: $('main').offset().top,
  });
  $('.scrollspy').scrollSpy({
    scrollOfffset: 0,
  });
});

// * discover

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
});
