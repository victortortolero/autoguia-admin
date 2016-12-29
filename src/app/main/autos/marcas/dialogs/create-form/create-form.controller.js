(function() {
  'use strict';

  angular
    .module('app.autos.marcas')
    .controller('CreateFormMarcasController', CreateFormMarcasController);

  /** @ngInject */
  function CreateFormMarcasController($scope, $mdDialog, marca) {
    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.marca = marca;

    function save() {
      $mdDialog.hide(vm.marca);
    }

    function close() {
      $mdDialog.cancel('closed-manually');
    }
  }


})();
