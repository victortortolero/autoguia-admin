(function() {
  'use strict';

  angular
    .module('app.autos.subtipos', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.subtipos', {
      url: '/subtipos',
      views: {
        'content@app': {
          templateUrl: 'app/main/autos/subtipos/subtipos.html',
          controller: 'SubTiposController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('autos.subtipos', {
        title : 'SubTipos',
        state : 'app.subtipos',
        weight: 1
    });
  }

})();
