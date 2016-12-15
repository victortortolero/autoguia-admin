(function() {
  'use strict';

  angular
    .module('app.autos', [
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
          templateUrl: 'app/main/autos/autos.html',
          controller: 'AutosController as vm'
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
    msNavigationServiceProvider.saveItem('autos', {
        title : 'Autos',
        state : 'app.autos',
        icon:   'icon-car',
        weight: 1
    });
  }

})();
