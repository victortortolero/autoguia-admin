(function() {
  'use strict';

  angular
    .module('app.dealers')
    .controller('EditFormDealersController', EditFormDealersController);

  /** @ngInject */
  function EditFormDealersController(dealer, $mdDialog) {
    var vm = this;

    vm.close = close;
    vm.update = update;
    vm.dealer = dealer;


    function update() {
      $mdDialog.hide(vm.dealer);
    }

    function close() {
      $mdDialog.cancel('closed-manually');
    }
  }


})();
