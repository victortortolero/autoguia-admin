(function() {
  'use strict';

  angular
    .module('app.autos.versiones', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.versiones', {
      url: '/versiones',
      views: {
        'content@app': {
          templateUrl: 'app/main/autos/versiones/versiones.html',
          controller: 'VersionesController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('autos.versiones', {
        title : 'Versiones',
        state : 'app.versiones',
        weight: 1
    });
  }

})();
