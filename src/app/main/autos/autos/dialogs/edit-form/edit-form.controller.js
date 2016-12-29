(function() {
  'use strict';

  angular
    .module('app.autos.autos')
    .controller('EditFormAutosController', EditFormAutosController);

  /** @ngInject */
  function EditFormAutosController(
    auto, $mdDialog, marcas, tipos, subtipos, versiones, combustibles, motores
  ) {

    var vm = this;

    vm.close = close;
    vm.auto = auto;

    vm.marcas = marcas;
    vm.tipos = tipos;
    vm.subtipos = subtipos;
    vm.modelos = [];
    vm.versiones = versiones;
    vm.combustibles = combustibles;
    vm.motores = motores;
    console.log(auto);


    function update() {
      $mdDialog.hide("hola");
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
