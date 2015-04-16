/*
manifest.json
	manifest.name
	manifest.version
*/

(function(){
	console.log ('frontendler inspector | popup');

	var data = {};
	var app = angular.module('inspector',[]);
	var manifest = chrome.runtime.getManifest();

	app.controller('PageController',function(){
		this.data = data;
		this.current = 'seo';
		this.manifest = manifest;

		console.log (this.manifest.version);

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

		//update data in pageController
		var bodyScope = angular.element($("body")).scope();
		bodyScope.$apply(function(){
			bodyScope.data = data;
		});


		//update data in ContentController
		var mainScope = angular.element($("main")).scope();
		mainScope.$apply(function(){
			mainScope.data = data;
		});

		chrome.browserAction.setIcon({
            path: "img/icon-ok.png",
        });

	});
});
