(function() {
  'use strict';

  angular
    .module('app.autos.autos')
    .controller('EditFormAutosController', EditFormAutosController);

  /** @ngInject */
  function EditFormAutosController(auto, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.auto = auto;


    function update() {

      $mdDialog.hide("hola");
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
