(function() {
  'use strict';

  angular
    .module('app.autos.autos', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.autos', {
      url: '/autos',
      views: {
        'content@app': {
          templateUrl: 'app/main/autos/autos/autos.html',
          controller: 'AutosController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('autos.autos', {
        title : 'Autos',
        state : 'app.autos',
        // icon:   'icon-car',
        weight: 1
    });
  }

})();
