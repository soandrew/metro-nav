(function() {
  // Find elements
  var button = document.getElementById('toggle');
  var nav = document.getElementById('nav');
  var tiles = Array.from(nav.getElementsByTagName('li'));

  // Calculate animation delay for tiles
  const FADE_TIME = 0.1;  // Time for nav to fade in
  const ROTATE_TIME = 0.2;  // Time for tiles to rotate
  var delays = [];
  var n = 0;
  function calculateDelays() {
    // Sort tiles by left offset
    tiles.sort(function(a, b) {
      return a.getBoundingClientRect().left - b.getBoundingClientRect().left;
    });
    // Calculate delay based on column tile is in
    var delay = 0;
    var prevLeftOffset = tiles[0].getBoundingClientRect().left;
    tiles.forEach(function(tile, i) {
      // Increment delay with each columns
      if (tile.getBoundingClientRect().left !== prevLeftOffset) {
        delay += ROTATE_TIME;
        prevLeftOffset = tile.getBoundingClientRect().left;
      }
      // Save delay for current tile
      delays[i] = delay;
    });
    // Cache delays.length
    n = delays.length;
  }
  calculateDelays();  // Initial call

  // Add button click handler
  button.onclick = function() {
    // Add/Remove show class
    button.classList.toggle('show');
    nav.classList.toggle('show');
    // Add animation delays either in forward or reverse
    if (button.classList.contains('show')) {
      nav.style['transition-delay'] = '';
      tiles.forEach(function(tile, i) {
        tile.style['transition-delay'] = delays[i] + FADE_TIME + 's';
      });
    } else {
      tiles.forEach(function(tile, i) {
        tile.style['transition-delay'] = delays[n - 1] - delays[i] + 's';
      });
      nav.style['transition-delay'] = delays[n - 1] + ROTATE_TIME + 's';
    }
  };
  // Add click background to dismiss handler
  nav.onclick = function() {
    // Remove show class
    button.classList.remove('show');
    nav.classList.remove('show');
    // Add animation delays in reverse
    tiles.forEach(function(tile, i) {
      tile.style['transition-delay'] = delays[delays.length - i - 1] + 's';
      nav.style['transition-delay'] = delays[delays.length - 1] + ROTATE_TIME + 's';
    });
  };

  // Handle window resizes
  var resizeTimeout;
  window.addEventListener('resize', function() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        calculateDelays();
        resizeTimeout = null;
      }, 66);  // Limit to 15fps
    }
  });
})();
