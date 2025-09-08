// background.js
// Author: Mikolaj "Miki" Ostrowski
// Author Github URI: https://www.github.com/ostryJR
// Project Repository URI: https://github.com/ostryJR/
// Description: LinkedIn Games Extension
// License: MIT

var elementFeedMiniSudoku = `
<li class="games-entrypoints-module__puzzle full-width">
  <a href="/games/mini-sudoku/" id="ember211" class="ember-view games-entrypoints-module__link link-without-hover-state block full-width">
    <div class="display-flex align-items-center">
      <img src="https://static.licdn.com/aero-v1/sc/h/6nflnl3tlil95zu7bjkqq3huc" alt="Mini Sudoku" class="games-entrypoints-module__puzzle-icon">
      <div class="display-flex full-width align-items-center justify-space-between">
        <div class="games-entrypoints-module__puzzle-name-insight pl2">
          <p class="t-14 t-bold t-black full-width truncate mb0">Mini Sudoku <span class="t-14 t-black t-normal">#0</span>
          </p>

            <span class="t-12 t-black--light t-normal inline-block full-width truncate">
              The classic game, made mini
            </span>
        </div>
        <svg role="none" aria-hidden="true" class="games-entrypoints-module__game-chevron-color" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="chevron-right-small" data-rtl="true">
<!---->    
<use href="#chevron-right-small" width="16" height="16"></use>
</svg>

      </div>
    </div>
  </a>
  </li>`;
setTimeout(function(){
    var games = document.getElementsByClassName('mt2 list-style-none')[0].innerHTML;
    //document.getElementsByClassName('pr-game-hub__list')[0].innerHTML = games + elementTango;
    document.getElementsByClassName('mt2 list-style-none')[0].innerHTML = games + elementFeedMiniSudoku;
}, 1000);
