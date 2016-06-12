(function () {
	'use strict';

	var app = angular.module('app',
		[
		//Angular modules
		'ngRoute',

		//Third party modules
		'mm.foundation',
		]
	);

	app.run([function () {
		$(document).foundation();
	}]);

	app.config(
		['$routeProvider',
			function ($routeProvider) {
				var when = $routeProvider.when;

				$routeProvider.when = function (path, route) {
					route.caseInsensitiveMatch = true;
					route.controllerAs = "vm";
					return when.apply(this, arguments);
				}

				$routeProvider.when("/home", {
					templateUrl: "views/home.html",
					controller: "HomeCtrl",
				}).when("/about", {
					templateUrl: "views/about.html",
					controller: "AboutCtrl",
				}).when("/homefurnishings", {
					templateUrl: "views/homefurnishings.html",
					controller: "HomeFurnishingsCtrl",
				}).when("/rentalSpace", {
					templateUrl: "views/rentalspace.html",
					controller: "RentalSpaceCtrl",
				}).when("/events", {
					templateUrl: "views/events.html",
					controller: "EventsCtrl",
				}).when("/giftshop", {
					templateUrl: "views/giftshop.html",
					controller: "GiftshopCtrl",
				}).when("/businesses", {
					templateUrl: "views/businesses.html",
					controller: "BusinessesCtrl",
				}).when("/connect", {
					templateUrl: "views/connect.html",
					controller: "ConnectCtrl",
				}).when("/delphinroom", {
					templateUrl: "views/delphinroom.html",
					controller: "RoomCtrl",
				}).otherwise({
					redirectTo: "/home"
				});
			}
		]
	);

	app.controller('AboutCtrl',
		['$rootScope', 'slideShowService',
			function ($rootScope, slideShowService) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'about');
				}

				function init() {
					changeView();
					slideShowService.initSlideShow();
				}
			}
		]
	);

	app.controller('BusinessesCtrl',
		['$rootScope',
			function ($rootScope) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'buisnesses');
				}

				function init() {
					changeView();
				}
			}
		]
	);

	app.controller('ConnectCtrl',
		['$rootScope',
			function ($rootScope) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'connect');
				}

				function init() {
					changeView();
					$(document).foundation({
						equalizer: {
							equalize_on_stack: true
						}
					});
				}
			}
		]
	);

	app.controller('EventsCtrl',
		['$rootScope', 'slideShowService',
			function ($rootScope, slideShowService) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'events');
				}

				function init() {
					changeView();
					slideShowService.initSlideShow();
				}
			}
		]
	);

	app.controller('GiftshopCtrl',
		['$rootScope', 'slideShowService',
			function ($rootScope, slideShowService) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'giftshop');
				}

				function init() {
					changeView();
					slideShowService.initSlideShow();
				}
			}
		]
	);

	app.controller('HomeCtrl',
		['$rootScope',
			function ($rootScope) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'home');
				}

				function init() {
					changeView();
				}
			}
		]
	);

	app.controller('HomeFurnishingsCtrl',
	['$rootScope', 'slideShowService',
		function ($rootScope, slideShowService) {
			var vm = this;

			init();

			function changeView() {
				$rootScope.$emit('changeView', 'events');
			}

			function init() {
				changeView();
				slideShowService.initSlideShow();
			}
		}
	]
);


	app.controller('IndexCtrl',
		['$rootScope',
			function ($rootScope) {
				var vm = this;

				vm.activePage = "home";
				$rootScope.$on('changeView', function (event, data) {
					vm.activePage = data;
				});
			}
		]
	);

	app.controller('RentalSpaceCtrl',
		['$rootScope', 'slideShowService',
			function ($rootScope, slideShowService) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'rentalSpace');
				}

				function init() {
					changeView();
					slideShowService.initSlideShow();
				}
			}
		]
	);

	app.controller('RoomCtrl',
		['$rootScope', 'slideShowService',
			function ($rootScope, slideShowService) {
				var vm = this;

				init();

				function changeView() {
					$rootScope.$emit('changeView', 'room');
				}

				function init() {
					changeView();
					slideShowService.initSlideShow();
				}
			}
		]
	);

	app.factory('slideShowService',
		[
			function () {
				var factory = this;

				factory.initSlideShow = initSlideShow;

				return factory;

				function initSlideShow() {
					angular.element(document).ready(function () {
						$('.single-item').slick({
							autoplay: true,
							dots: true,
							autoplaySpeed: 3000,
							speed: 800,
							adaptiveHeight: false,
						});
					});
				}
			}
		])
})();