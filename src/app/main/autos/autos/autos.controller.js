(function() {
  'use strict';

  angular
    .module('app.autos.autos')
    .controller('AutosController', AutosController);

  /** @ngInject */
  function AutosController($state, api, $document, $mdDialog, $mdToast, moment) {
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
      api.mockup.getAutos()
        .then(function(res) {
          return res.data;
        })
        .then(function(data) {
          vm.autos = data;
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
		  }).then(function(answer) {
				// Envio los datos al servidor.
        console.log(answer);
				// ScheduleAdminService.saveDate(answer)
				// 	.then(function(response) {
				// 		$mdToast.show(
				// 				$mdToast.simple()
  			// 					.textContent(response.message)
  			// 					.toastClass("toast-successfully")
  			// 					.hideDelay(3000)
				// 		);
				// 		$timeout(function() {
				// 			$state.reload();
				// 		}, 4000);
				// 	}, function (reason) {
				// 		$mdToast.show(
				// 				$mdToast.simple()
  			// 					.textContent(response.message)
  			// 					.toastClass("toast-error")
  			// 					.hideDelay(3000)
				// 		);
				// 	});
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
		  }).then(function(answer) {
				// Envio los datos al servidor.
        var formData = new FormData();
        formData.append('files[]', answer.imagen.lfFile);
        console.log(formData);
        console.log(answer);
				// ScheduleAdminService.saveDate(answer)
				// 	.then(function(response) {
				// 		$mdToast.show(
				// 				$mdToast.simple()
  			// 					.textContent(response.message)
  			// 					.toastClass("toast-successfully")
  			// 					.hideDelay(3000)
				// 		);
				// 		$timeout(function() {
				// 			$state.reload();
				// 		}, 4000);
				// 	}, function (reason) {
				// 		$mdToast.show(
				// 				$mdToast.simple()
  			// 					.textContent(response.message)
  			// 					.toastClass("toast-error")
  			// 					.hideDelay(3000)
				// 		);
				// 	});
		  });
		}

  }
})();
