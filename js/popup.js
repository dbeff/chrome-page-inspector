(function(){
	console.log ('frontendler inspector | popup.js');

	var data = {};
	var app = angular.module('inspector',[]);

	app.controller('PageController',function(){
		this.current = 'seo';
		this.goTo = function (page){
			page = page || 'seo';
			this.current = page;
		};
	});

	app.controller('ContentController',function(){
		this.data = data;
	});

})();



chrome.tabs.getSelected(null,function(tab) {
	chrome.tabs.sendRequest(tab.id, 'mensagem', function(response) {
		data = JSON.parse(response);

		//update data in ContentController
		var scope = angular.element($("main")).scope();
		scope.$apply(function(){
			scope.data = data;
		});
	});
});


