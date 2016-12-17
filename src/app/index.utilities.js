(function() {
  'use strict';

  angular.module('fuse').factory('utils', apiService);

  /** @ngInject */
  function apiService($http) {
    var utils = {};

    utils.removeObjectFromArray = function(array, obj, prop) {
      for (var i = 0; i < array.length; i++) {
        var currentObj = array[i];
        if (currentObj[prop] === obj[prop]) {
          return array.splice(i, 1)[0];
        }
      }
    };

    utils.swalDeleteObject = function(obj) {
      return angular.extend({}, utils.swalBaseDeleteConfirm, obj);
    };

    utils.swalBaseDeleteConfirm = {
      title: 'Seguro que quieres eliminar esta marca?',
      // text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true
    };

    return utils;
  }

})();
