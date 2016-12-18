(function() {
  'use strict';

  angular
    .module('app.autos', [
      'app.autos.autos',
      'app.autos.marcas',
      'app.autos.tipos',
      'app.autos.subtipos',
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {

    msNavigationServiceProvider.saveItem('autos', {
        title : 'Autos',
        icon  : 'icon-car',
        weight: 3
    });

  }

})();
