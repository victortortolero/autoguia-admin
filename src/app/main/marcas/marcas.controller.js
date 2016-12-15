(function() {
  'use strict';

  angular
    .module('app.marcas')
    .controller('MarcasController', MarcasController);

  /** @ngInject */
  function MarcasController(
    $state, api, $document, $mdDialog, $mdToast, moment, $timeout, $scope
  ) {
    var vm = this;

    vm.marcas = [];
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
      api.marcas.get()
        .then(function(res) {
          var data = res.data;
          vm.marcas = data;
        }, function(error) {
          console.log(error);
        });
    }

    function showEditForm(marca, e) {
		  $mdDialog.show({
		    controller: 'EditFormMarcasController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/marcas/dialogs/edit-form/edit-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		    locals: {
		      marca: marca
		    }
		  }).then(function(answer) {
        return api.marcas.update(answer);
      }).then(function(response) {
        console.log(marca);
        var formData = new FormData();
        formData.append('id_marca', marca.id_marca);
        formData.append('archivo', marca.file[0].lfFile);
        return api.marcas.updateImage(formData);
      }).then(function() {
				$mdToast.show(
					$mdToast.simple()
						.textContent("Marca actualizada exitosamente!")
						.toastClass("toast-successfully")
						.hideDelay(3000)
				);
				$timeout(function() {
					$state.reload();
				}, 4000);
			}).catch(function(err) {
        console.log("error");
        $mdToast.show(
					$mdToast.simple()
		        .textContent("Error al actualizar marca!")
	          .toastClass("toast-error")
            .hideDelay(3000)
				);
      });
		}

    function showCreateForm(e) {
		  $mdDialog.show({
		    controller: 'CreateFormMarcasController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/marcas/dialogs/create-form/create-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		  }).then(function(answer) {
				return api.marcas.create(answer);
		  }).then(function(res) {
        $mdToast.show(
          $mdToast.simple()
            .textContent("Marca creada de manera exitosa!")
            .toastClass("toast-successfully")
            .hideDelay(3000)
        );
        $timeout(function() {
        	$state.reload();
        }, 4000);
      }).catch(function (err) {
        console.log(err);
        $mdToast.show(
          $mdToast.simple()
            .textContent("Error al crear la marca")
            .toastClass("toast-error")
            .hideDelay(3000)
        );
      });
		}

    function destroy(marca) {
      swal({
        title: 'Seguro que quieres eliminar esta marca?',
        // text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: function() {
          return api.marcas.destroy(marca);
        },
      }).then(function(res) {
        swal({
          type: 'success',
          title: 'Se elimino la marca exitosamente!',
        });
        removeObjectFromArray(vm.marcas, marca, 'id_marca');
        $scope.$apply();
      }).catch(function(err) {
        swal({
          type: 'warning',
          title: 'Error al intentar eliminar la marca!',
          text: 'Intente de nuevo mas tarde.'
        });
        console.log("error deleting marca");
        console.log(err);
      });
    }

    function removeObjectFromArray(array, obj, key) {
      for (var i = 0; i < array.length; i++) {
        var currentObj = array[i];
        if (currentObj[key] === obj[key]) {
          array.splice(i, 1)[0];
          return array;
        }
      }
    }
  }
})();
