/* Sciencefolio — theme.js
   Load in <head> (no defer) so the right theme paints on first frame.
   - Dark/light: follows the OS until the visitor uses the footer toggle.
   - ?pack=serif : previews a type pack (remembered for the tab). Handy while
     choosing; delete the "pack preview" block once you've set data-pack.   */
(function () {
  var root = document.documentElement;

  /* pack preview */
  try {
    var q = new URLSearchParams(location.search).get('pack');
    if (q) sessionStorage.setItem('sf-pack', q);
    var pack = sessionStorage.getItem('sf-pack');
    if (pack === 'serif' || pack === 'grotesk') root.dataset.pack = pack === 'serif' ? 'serif' : '';
  } catch (e) {}

  /* theme */
  var saved = null;
  try { saved = localStorage.getItem('sf-theme'); } catch (e) {}
  var theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    function paint() {
      var dark = root.dataset.theme === 'dark';
      btn.textContent = dark ? '◐ Light' : '◐ Dark';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    paint();
    btn.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('sf-theme', root.dataset.theme); } catch (e) {}
      paint();
    });
  });
})();
