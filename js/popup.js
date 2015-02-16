(function(){
	console.log ('frontendler inspector | popup.js');
	var app = angular.module('inspector',[]);
	var dados = {};

	app.controller('PageController',function(){
		this.current = 'seo';
		console.log ('page: ' + this.current);
		this.goTo = function (page){
			page = page || 'seo';
			this.current = page;
			console.log ('page: ' + this.current);
		};
	});

	//chrome.tabs.getSelected(null,function(tab) {
	//	chrome.tabs.sendRequest(tab.id, 'mensagem', function(response) {
	//			console.log (response);
	//			dados = JSON.parse(response);
	//			console.log (dados);
	//			$('.title').html("" + dados.title);
	//			$('.description').html("" + dados.description);
	//			$('.viewport').html("" + dados.viewport);
	//			$('.og-title').html("" + dados.ogTitle);
	//			$('.og-image').html("" + dados.ogImage);
	//		}
	//	);
	//});

})()



