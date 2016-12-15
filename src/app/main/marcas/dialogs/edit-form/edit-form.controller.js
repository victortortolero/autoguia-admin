(function() {
  'use strict';

  angular
    .module('app.marcas')
    .controller('EditFormMarcasController', EditFormMarcasController);

  /** @ngInject */
  function EditFormMarcasController(marca, api, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.marca = marca;
    vm.update = update;

    function update() {
      $mdDialog.hide(vm.marca);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
