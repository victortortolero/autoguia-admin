(function() {
  'use strict';

  angular
    .module('app.reportes')
    .controller('ReportesController', ReportesController);

  /** @ngInject */
  function ReportesController(
    $state, api, $document, $mdDialog, $mdToast,
    moment, utils, $timeout, $scope
  ) {
    var vm = this;

    vm.autos = [
      {id: 1, nombre: 'uno'},
      {id: 2, nombre: 'dos'},
      {id: 3, nombre: 'tres'},
      {id: 4, nombre: 'cuatro'},
    ];

  }
})();
