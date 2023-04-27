document.addEventListener( 'DOMContentLoaded', function() {
  var elms = document.getElementsByClassName( 'splide' );
  var options = {
    type: 'loop',
    focus: 'center',
    //perPage: 3,
    pagination: false,
    gap: 16,
    padding: "1px",
    updateOnMove: true,
    autoWidth: true,

    //set desktop breakpoint to show gallery
    /*
    mediaQuery: 'min',
    breakpoints: {
      640: {
        destroy: true,
      }
    }
    */
  };

  for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ], options ).mount();
  }
  } );