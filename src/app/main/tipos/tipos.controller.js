(function() {
  'use strict';

  angular
    .module('app.tipos')
    .controller('TiposController', TiposController);

  /** @ngInject */
  function TiposController($state, api, $document, $mdDialog, $mdToast, moment) {
    var vm = this;

    vm.tipos = [];
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
      api.mockup.getTipos()
        .then(function(res) {
          return res.data;
        })
        .then(function(data) {
          console.log(data);
          vm.tipos = data;
        });
    }

    function showEditForm(tipo, e) {
		  $mdDialog.show({
		    controller: 'EditFormTiposController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/tipos/dialogs/edit-form/edit-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
		    locals: {
		      tipo: tipo
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
		    controller: 'CreateFormTiposController',
		    controllerAs: 'vm',
		    templateUrl: 'app/main/tipos/dialogs/create-form/create-form.html',
		    parent: angular.element($document.body),
		    targetEvent: e,
		    clickOutsideToClose: true,
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

  }
})();
