(function() {
  'use strict';

  angular
    .module('app.tipos')
    .controller('EditFormTiposController', EditFormTiposController);

  /** @ngInject */
  function EditFormTiposController(tipo, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.tipo = tipo;


    function update() {

      $mdDialog.hide(vm.tipo);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
