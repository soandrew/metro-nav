(function() {
  // Find elements
  var buttons = document.getElementsByClassName('toggle');

  // Add click handler
  for (var i = 0; i < buttons.length; i ++) {
    buttons[i].onclick = function() {
      var button = this;
      // Get data-target attribute
      var target = document.getElementById(button.dataset.target);
      // Add/Remove show class
      button.classList.toggle('show');
      target.classList.toggle('show');
      // Add click background to dismiss handler
      target.onclick = function() {
        // Remove show class
        button.classList.remove('show');
        target.classList.remove('show');
      };
    };
  }
})();
