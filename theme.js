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

  // hidden easter egg: click the name 19 times to reveal the archive links
  var nameEgg = document.getElementById('name-egg');
  var eggPop = document.getElementById('egg-pop');
  if(nameEgg && eggPop){
    var eggClicks = 0;
    nameEgg.addEventListener('click', function(){
      eggClicks++;
      if(eggClicks === 19){
        eggPop.hidden = false;
        eggPop.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  // back-to-top button, injected on every page that loads this script
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.textContent = '▲ top';
  document.body.appendChild(toTop);
  toTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  var onScroll = function(){
    toTop.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
