(function() {
  'use strict';

  angular
    .module('app.autos.autos')
    .controller('AutosController', AutosController);

  /** @ngInject */
  function AutosController(
    $state, api, $document, $mdDialog, $mdToast,
    moment, utils, $timeout, $scope
  ) {
    var vm = this;

    vm.autos = [];
    vm.showEditForm = showEditForm;
    vm.showCreateForm = showCreateForm;

    vm.dtOptions = {
			dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
			pagingType: 'simple',
			autoWidth : false,
			responsive: true
		};

    activate();

    function activate() {
      api.autos.get()
        .then(function(res) {
          vm.autos = res.data;
        });
    }

    function showEditForm(auto, e) {
		  $mdDialog.show({
		    controller: 'EditFormAutosController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/autos/autos/dialogs/edit-form/edit-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		    locals: {
		      auto: auto
		    }
		  }).then(function(data) {
        return api.autos.update(data);
      }).then(function() {
        utils.successToast('Auto actualizado exitosamente!');
				$timeout($state.reload(), 4000);
			}).catch(function(err) {
        if (err === "closed-manually" || typeof(err) === 'undefined') return;
        utils.errorToast('Error al actualizar el Auto!');
      });
		}

    function showCreateForm(e) {
		  $mdDialog.show({
		    controller: 'CreateFormAutosController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/autos/autos/dialogs/create-form/create-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
      }).then(function(auto) {
        return api.autos.create(auto);
      }).then(function(res) {
        utils.successToast('Auto creado exitosamente!');
				$timeout($state.reload(), 4000);
			}).catch(function(err) {
        if (err === "closed-manually" || typeof(err) === 'undefined') return;
        utils.errorToast('Error al crear Auto!');
      });
		}

    function destroy(auto) {
      swal(utils.swalDeleteObject({
        title: 'Seguro que quieres eliminar este Auto?',
        preConfirm: function() {
          return api.autos.destroy(auto);
        }
      })).then(function(res) {
        utils.removeObjectFromArray(vm.autos, auto, 'id_auto');
        $scope.$apply();
        swal({
          type: 'success',
          title: 'Se elimino el Auto exitosamente!',
        });
      }).catch(function(err) {
        if (err === "cancel") return;
        swal({
          type: 'warning',
          title: 'Error al intentar eliminar el Auto!',
          text: 'Intente de nuevo mas tarde.'
        });
      });
    }

  }
})();