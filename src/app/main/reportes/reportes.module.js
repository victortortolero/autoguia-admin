(function() {
  'use strict';

  angular
    .module('app.reportes', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.reportes', {
      url: '/reportes',
      views: {
        'content@app': {
          templateUrl: 'app/main/reportes/reportes.html',
          controller: 'ReportesController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('reportes', {
        title : 'Reportes',
        state : 'app.reportes',
        weight: 1
    });
  }

})();
