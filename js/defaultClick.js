window.addEventListener( 'DOMContentLoaded', function() {
  let defaults = document.querySelectorAll(".js-defaultClick");

  for (const child of defaults) {
    child.click();
  }
} );