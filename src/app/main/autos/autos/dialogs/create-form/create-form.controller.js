(function() {
  'use strict';

  angular
    .module('app.autos.autos')
    .controller('CreateFormAutosController', CreateFormAutosController);

  /** @ngInject */
  function CreateFormAutosController(
    $scope, $mdDialog, auto, marcas, tipos, subtipos, versiones, combustibles, motores
  ) {

    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.auto = auto;

    vm.marcas = marcas;
    vm.tipos = tipos;
    vm.subtipos = subtipos;
    vm.modelos = [];
    vm.versiones = versiones;
    vm.combustibles = combustibles;
    vm.motores = motores;

    function save() {
      $mdDialog.hide(vm.auto);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
