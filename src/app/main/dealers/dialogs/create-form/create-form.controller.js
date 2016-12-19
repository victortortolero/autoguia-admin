(function() {
  'use strict';

  angular
    .module('app.dealers')
    .controller('CreateFormDealersController', CreateFormDealersController);

  /** @ngInject */
  function CreateFormDealersController($scope, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.save = save;
    vm.dealer = {};


    function save() {
      $mdDialog.hide(vm.dealer);
    }

    function close() {
      $mdDialog.cancel('closed-manually');
    }
  }


})();
