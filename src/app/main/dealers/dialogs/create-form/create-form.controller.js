(function() {
  'use strict';

  angular
    .module('app.dealers')
    .controller('CreateFormDealersController', CreateFormDealersController);

  /** @ngInject */
  function CreateFormDealersController($scope, $mdDialog, position, NgMap) {
    var vm = this;

    // Attributes
    vm.dealer = {};
    vm.currentPos = position;
    vm.mapCenter = vm.currentPos.latitude + ',' + vm.currentPos.longitude;
    vm.marker = {
      lat: vm.currentPos.latitude,
      lng: vm.currentPos.longitude
    };
    console.log(vm.currentPos);

    // Methods
    vm.close = close;
    vm.save = save;
    vm.handleMarkerDrag = handleMarkerDrag;
    vm.centerOnMarker = centerOnMarker;

    activate();

    function save() {
      $mdDialog.hide(vm.dealer);
    }

    function close() {
      $mdDialog.cancel('closed-manually');
    }

    function activate() {
      NgMap.getMap().then(function(map) {
        vm.map = map;
        vm.map.setCenter({
          lat: vm.currentPos.latitude,
          lng: vm.currentPos.longitude
        });
      });
    }

    function handleMarkerDrag(event) {
      if (typeof vm.map === 'undefined') return;
      vm.map.panTo(event.latLng);
      updateMarker(event.latLng);
    }

    function centerOnMarker() {
      if (typeof vm.map === 'undefined') return;
      vm.map.panTo(marker.latLng);
    }

    function updateMarker(latLng) {
      vm.marker = {
        lat: latLng.lat(),
        lng: latLng.lng(),
        latLng: latLng,
      }
    }
  }


})();
