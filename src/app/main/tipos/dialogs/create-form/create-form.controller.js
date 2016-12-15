(function() {
  'use strict';

  angular
    .module('app.tipos')
    .controller('CreateFormTiposController', CreateFormTiposController);

  /** @ngInject */
  function CreateFormTiposController($scope, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.tipo = {};


    function save() {
      $mdDialog.hide(vm.tipo);
    }

    function close() {
      $mdDialog.cancel();
    }
  }


})();
