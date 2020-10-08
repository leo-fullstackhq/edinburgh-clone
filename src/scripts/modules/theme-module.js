AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    $('.hamburger').click(() => {
        if ($('#side_bar').hasClass('show')) {
          $('.sidebar').removeClass('show')
        } else {
          $('.sidebar').addClass('show')
        }
    })

  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
