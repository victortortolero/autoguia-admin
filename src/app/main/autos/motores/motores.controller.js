(function() {
  'use strict';

  angular
    .module('app.autos.motores')
    .controller('MotoresController', MotoresController);

  /** @ngInject */
  function MotoresController(
    $state, api, $document, $mdDialog, $mdToast,
    moment, utils, $timeout, $scope
  ) {
    var vm = this;

    vm.motores = [];
    vm.showEditForm = showEditForm;
    vm.showCreateForm = showCreateForm;
    vm.destroy = destroy;

    vm.dtOptions = {
			dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
			pagingType: 'simple',
			autoWidth : false,
			responsive: true
		};

    activate();

    function activate() {
      api.motores.get()
        .then(function(res) {
          var data = res.data;
          vm.motores = data;
        }, function(error) {
          console.log(error);
        });
    }

    function showEditForm(motor, e) {
		  $mdDialog.show({
		    controller: 'EditFormMotoresController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/autos/motores/dialogs/edit-form/edit-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		    locals: {
		      motor: motor
		    }
		  }).then(function(data) {
        return api.motores.update(data);
      }).then(function() {
        utils.successToast('Motor actualizado exitosamente!');
				$timeout($state.reload(), 4000);
			}).catch(function(err) {
        if (err === "closed-manually" || typeof(err) === 'undefined') return;
        utils.errorToast('Error al actualizar Motor!');
      });
		}

    function showCreateForm(e) {
		  $mdDialog.show({
		    controller: 'CreateFormMotoresController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/autos/motores/dialogs/create-form/create-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		  }).then(function(motor) {
        return api.motores.create(motor);
      }).then(function(res) {
        utils.successToast('Motor creado exitosamente!');
				$timeout($state.reload(), 4000);
			}).catch(function(err) {
        if (err === "closed-manually" || typeof(err) === 'undefined') return;
        utils.errorToast('Error al crear Motor!');
      });
		}

    function destroy(motor) {
      swal(utils.swalDeleteObject({
        title: 'Seguro que quieres eliminar este Motor?',
        preConfirm: function() {
          return api.motores.destroy(motor);
        }
      })).then(function(res) {
        utils.removeObjectFromArray(vm.motores, motor, 'id_motor');
        $scope.$apply();
        swal({
          type: 'success',
          title: 'Se elimino el Motor exitosamente!',
        });
      }).catch(function(err) {
        if (err === "cancel") return;
        swal({
          type: 'warning',
          title: 'Error al intentar eliminar el Motor!',
          text: 'Intente de nuevo mas tarde.'
        });
      });
    }

  }
})();
