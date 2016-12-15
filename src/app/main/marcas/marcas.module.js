(function() {
  'use strict';

  angular
    .module('app.marcas', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.marcas', {
      url: '/marcas',
      views: {
        'content@app': {
          templateUrl: 'app/main/marcas/marcas.html',
          controller: 'MarcasController as vm'
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
    msNavigationServiceProvider.saveItem('marcas', {
        title : 'Marcas',
        state : 'app.marcas',
        weight: 1
    });
  }

})();
