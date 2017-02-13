( function (){
	'use strict';
		angular
			.module('Technomart', [ngRoute])
			.config('Technomart');

		function Technomart ($routeProvider) {
				$routeProvider
					.when('/', {templeteUrl:'index.html' })
					.when('/catalog', {templeteUrl:'/Larsen/Курс%20Front-end/Home%20work/Technomart/Technomart/catalog.html' })
					
			}
})();