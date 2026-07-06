(function(){
  var saved = localStorage.getItem('theme');
  if(saved === 'light' || saved === 'dark'){
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

document.addEventListener('DOMContentLoaded', function(){
  var btns = document.querySelectorAll('.theme-toggle');
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });

  document.querySelectorAll('[data-copy]').forEach(function(el){
    var tip = el.querySelector('.copy-tooltip');
    if(!tip) return;
    var original = tip.textContent;
    el.addEventListener('click', function(){
      navigator.clipboard.writeText(el.getAttribute('data-copy')).then(function(){
        tip.textContent = 'Copied!';
        tip.classList.add('copied');
      });
    });
    el.addEventListener('mouseleave', function(){
      setTimeout(function(){
        tip.textContent = original;
        tip.classList.remove('copied');
      }, 200);
    });
  });
});
