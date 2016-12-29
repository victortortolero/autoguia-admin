(function() {
  'use strict';

  angular
    .module('app.autos.motores', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.motores', {
      url: '/motores',
      resolve: {
        motores: function(api) {
          return api.motores.get().then(function(res) {
            return res.data
          });
        }
      },
      views: {
        'content@app': {
          templateUrl: 'app/main/autos/motores/motores.html',
          controller: 'MotoresController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('autos.motores', {
        title : 'Motores',
        state : 'app.motores',
        weight: 1
    });
  }

})();
