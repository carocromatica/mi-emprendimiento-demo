/* faq.js — busca y filtra por tema las preguntas frecuentes. */
(function () {
  var q = document.getElementById('faq-q'), chips = document.querySelectorAll('.faq-chip'), groups = document.querySelectorAll('.faq-group'), empty = document.getElementById('faq-empty');
  if (!q) return;
  var topic = '';
  var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  function apply() {
    var t = norm(q.value.trim()), any = false;
    groups.forEach(function (g) {
      var shown = 0;
      g.querySelectorAll('.faq-item').forEach(function (d) {
        var ok = (!topic || g.getAttribute('data-cat') === topic) && (!t || norm(d.textContent).indexOf(t) !== -1);
        d.hidden = !ok; if (ok) shown++;
      });
      g.hidden = !shown; if (shown) any = true;
    });
    empty.hidden = any;
  }
  q.addEventListener('input', apply);
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var k = c.getAttribute('data-faq'); topic = topic === k ? '' : k;
      chips.forEach(function (x) { var on = x.getAttribute('data-faq') === topic; x.setAttribute('aria-pressed', on); x.classList.toggle('is-on', on); });
      apply();
    });
  });
})();
