(function() {
  'use strict';

  angular
    .module('app.dealers', [
      'datatables', 'flow', 'angularMoment', 'ngMaterial', 'lfNgMdFileInput'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.dealers', {
      url: '/dealers',
      resolve: {
        dealers: function(api) {
          return api.dealers.get().then(function(res) {
            return res.data;
          });
        }
      },
      views: {
        'content@app': {
          templateUrl: 'app/main/dealers/dealers.html',
          controller: 'DealersController as vm'
        }
      }
    });

    msNavigationServiceProvider.saveItem('dealers', {
        title : 'Dealers',
        state : 'app.dealers',
        weight: 10
    });
  }

})();
