(function() {
  'use strict';

  angular
    .module('app.marcas')
    .controller('CreateFormMarcasController', CreateFormMarcasController);

  /** @ngInject */
  function CreateFormMarcasController($scope, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.marca = {};

    function save() {
      $mdDialog.hide(vm.marca);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
