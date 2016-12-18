(function() {
  'use strict';

  angular
    .module('app.autos.tipos', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.tipos', {
      url: '/tipos',
      views: {
        'content@app': {
          templateUrl: 'app/main/autos/tipos/tipos.html',
          controller: 'TiposController as vm'
        }
      }
    });

    // Translation
    // $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');

    // Navigation
    // msNavigationServiceProvider.saveItem('pages.auth', {
    //     title : 'Authentication',
    //     icon  : 'icon-lock',
    //     weight: 1
    // });
    //
    msNavigationServiceProvider.saveItem('autos.tipos', {
        title : 'Tipos de Auto',
        state : 'app.tipos',
        weight: 1
    });
  }

})();
