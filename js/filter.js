/* Sciencefolio — filter.js (Work page only)
   Buttons carry data-filter="all|paper|project|poster|talk"; entries carry
   data-type. Add your own types by adding a button + matching data-type. */
(function () {
  var buttons = document.querySelectorAll('.filter');
  var pubs = document.querySelectorAll('.pub');
  var groups = document.querySelectorAll('.year-group');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      pubs.forEach(function (p) { p.hidden = !(f === 'all' || p.dataset.type === f); });
      groups.forEach(function (g) { g.hidden = !g.querySelector('.pub:not([hidden])'); });
    });
  });
})();
