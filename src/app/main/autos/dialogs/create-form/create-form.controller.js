(function() {
  'use strict';

  angular
    .module('app.autos')
    .controller('CreateFormAutosController', CreateFormAutosController);

  /** @ngInject */
  function CreateFormAutosController($scope, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.auto = {};


    function save() {
      vm.auto.imagen = $scope.file[0];
      $mdDialog.hide(vm.auto);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
