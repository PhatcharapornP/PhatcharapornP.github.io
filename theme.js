(function(){
  var saved = localStorage.getItem('theme');
  if(saved === 'light' || saved === 'dark'){
    document.documentElement.setAttribute('data-theme', saved);
  }
  // Dark-default by design (dark Division-HUD brand). System prefers-color-scheme is
  // deliberately NOT followed; the toggle switches to light and remembers the choice.
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
      if(!navigator.clipboard){ tip.textContent = el.getAttribute('data-copy'); return; }
      navigator.clipboard.writeText(el.getAttribute('data-copy')).then(function(){
        tip.textContent = 'Copied!';
        tip.classList.add('copied');
      }).catch(function(){
        tip.textContent = 'Press Ctrl+C to copy';
      });
    });
    el.addEventListener('mouseleave', function(){
      setTimeout(function(){
        tip.textContent = original;
        tip.classList.remove('copied');
      }, 200);
    });
  });

  // hidden easter egg: click the name 19 times to open an access terminal,
  // then enter the Konami code (up up down down left right left right B A)
  // via the on-screen gamepad OR the keyboard. Wrong key shakes and resets.
  var nameEgg = document.getElementById('name-egg');
  var eggTerm = document.getElementById('egg-term');
  if(nameEgg && eggTerm){
    var EGG_CODE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    var EGG_GLYPH = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', b: 'B', a: 'A' };
    var eggSlots = eggTerm.querySelectorAll('.egg-slot');
    var eggLinks = document.getElementById('egg-links');
    var eggProgress = 0;
    var eggUnlocked = false;
    var eggClicks = 0;

    nameEgg.addEventListener('click', function(){
      if(eggUnlocked) return;
      eggClicks++;
      if(eggClicks === 19){
        eggTerm.hidden = false;
        eggTerm.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });

    // one checker for a single press, from a button OR the keyboard
    function eggPress(key){
      if(eggUnlocked || eggTerm.hidden) return;
      if(key === EGG_CODE[eggProgress]){
        eggSlots[eggProgress].textContent = EGG_GLYPH[key];
        eggSlots[eggProgress].classList.add('on');
        eggProgress++;
        if(eggProgress === EGG_CODE.length){
          eggUnlocked = true;
          eggTerm.classList.add('solved');   // hides the gamepad (see style.css)
          eggLinks.hidden = false;
        }
      } else {
        eggProgress = 0;
        for(var i = 0; i < eggSlots.length; i++){
          eggSlots[i].textContent = '';
          eggSlots[i].classList.remove('on');
        }
        // if the wrong key was itself a valid start (an Up), count it as press 1
        if(key === EGG_CODE[0]){
          eggSlots[0].textContent = EGG_GLYPH[key];
          eggSlots[0].classList.add('on');
          eggProgress = 1;
        }
        eggTerm.classList.remove('shake');
        void eggTerm.offsetWidth; // force reflow so the shake animation restarts
        eggTerm.classList.add('shake');
      }
    }

    // on-screen gamepad buttons
    eggTerm.querySelectorAll('.egg-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ eggPress(btn.getAttribute('data-key')); });
    });

    // desktop keyboard — same checker
    document.addEventListener('keydown', function(e){
      if(eggTerm.hidden || eggUnlocked) return;
      var k = e.key;
      if(k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight'){
        e.preventDefault();
        eggPress(k);
      } else if(k === 'b' || k === 'B'){ eggPress('b'); }
      else if(k === 'a' || k === 'A'){ eggPress('a'); }
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
