// background.js
// Author: Mikolaj "Miki" Ostrowski
// Author Github URI: https://www.github.com/ostryJR
// Project Repository URI: https://github.com/ostryJR/
// Description: LinkedIn Games Extension
// License: MIT



var elementTango = `
<li class="pr-game-hub__card">
  <a href="/games/tango/" id="ember44" class="ember-view link-without-hover-state artdeco-card ps-game-entrypoint-card">
    <div class="ps-game-entrypoint-card__insight-wrapper">
      <div>
<!---->
        <span class="t-12 t-black--light t-normal inline-block full-width pt1 ps-game-entrypoint-card__insight">Harmonize the grid.
        </span>
      </div>

      <span class="t-20 t-bold t-black full-width block truncate">Tango<span class="t-20
            ml1 t-black t-normal">#000</span>
      </span>
    </div>

    <div class="ps-game-entry-point__bg-tango">
      <img alt="Tango" src="https://static.licdn.com/aero-v1/sc/h/gqavqd9gk6ja1s27lr1p2zz2" class="ps-game-entrypoint-card__bg-img">
    </div>

  </a>
</li>`;
var elementMiniSudoku = `
<li class="pr-game-hub__card">   
  <a href="/games/mini-sudoku/" id="ember44" class="ember-view link-without-hover-state artdeco-card ps-game-entrypoint-card">
    <div class="ps-game-entrypoint-card__insight-wrapper">
      <div>
<!---->
        <span class="t-12 t-black--light t-normal inline-block full-width pt1 ps-game-entrypoint-card__insight">The classic game, made mini
        </span>
      </div>

      <span class="t-20 t-bold t-black full-width block truncate">Mini Sudoku<span class="t-20
            ml1 t-black t-normal">#000</span>
      </span>
    </div>

    <div class="ps-game-entry-point__bg-sudoku">
      <img alt="Mini Sudoku" src="https://static.licdn.com/aero-v1/sc/h/6nflnl3tlil95zu7bjkqq3huc" class="ps-game-entrypoint-card__bg-img">
    </div>

  </a>
  
</li>`;
setTimeout(function(){
    var games = document.getElementsByClassName('pr-game-hub__list')[0].innerHTML;
    //document.getElementsByClassName('pr-game-hub__list')[0].innerHTML = games + elementTango;
    document.getElementsByClassName('pr-game-hub__list')[0].innerHTML = games + elementMiniSudoku;
}, 1000);
