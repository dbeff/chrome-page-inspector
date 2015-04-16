console.log ('frontendler inspector | content');

function Content (){
	this.data = {};
	this.data.version = "";
	this.data.meta = {};
	this.data.meta.title = $('title').html();
	this.data.meta.description = $("meta[name='description']").attr('content');
	this.data.meta.keywords = $("meta[name='keywords']").attr('content');
	this.data.meta.viewport = $("meta[name='viewport']").attr('content');

	this.data.headers = {};
	this.data.headers.h1 = [];
	this.data.headers.h2 = [];
	this.data.headers.h3 = [];
	this.data.headers.h4 = [];
	this.data.headers.h5 = [];
	this.data.headers.h6 = [];

	this.data.social = {};
	this.data.social.ogTitle = $("meta[property='og:title']").attr('content');
	this.data.social.ogDescription = $("meta[property='og:description']").attr('content');
	this.data.social.ogUrl = $("meta[property='og:url']").attr('content');
	this.data.social.ogSiteName = $("meta[property='og:site_name']").attr('content');
	this.data.social.ogImage = $("meta[property='og:image']").attr('content');
	this.data.social.ogLocale = $("meta[property='og:locale']").attr('content');
	this.data.social.ogType = $("meta[property='og:type']").attr('content');

	this.data.social.twitterCard = $("meta[name='twitter:card']").attr('content');
	this.data.social.twitterSite = $("meta[name='twitter:site']").attr('content');
	this.data.social.twitterTitle = $("meta[name='twitter:title']").attr('content');
	this.data.social.twitterDescription = $("meta[name='twitter:description']").attr('content');
	this.data.social.twitterImage = $("meta[name='twitter:image']").attr('content');
	this.data.social.twitterUrl = $("meta[name='twitter:url']").attr('content');

	this.data.favicon = {};
	this.data.favicon.msTileImage =
	this.data.favicon.msTileColor = '';
	this.data.favicon.msTileColor = '';

	this.data.style = {};
	this.data.style.link = [];

	this.data.script = {};
	this.data.script.source = [];


	this.data.httpHeaders = '';


	this.getStyles = function (){
		var elements = document.querySelectorAll("link[rel='stylesheet']") || [];
		for (var i = 0; i < elements.length; i++){
			this.data.style.link.push(elements[i].href);
		}
	};

	this.getScripts = function (){
		var elements = document.querySelectorAll("script[src]") || [];
		for (var i = 0; i < elements.length; i++){
			this.data.script.source.push(elements[i].src);
		}
	};

	this.getHeaders = function (){
		var headers = this.data.headers;
		$("h1,h2,h3,h4,h5,h6").each (function(){
			var element = $(this).prop("tagName");
			var text = $(this).text();
			 headers[element.toLowerCase()].push(text);
		});

	};

	this.getHttpHeaders = function (){
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		this.data.httpHeaders = req.getAllResponseHeaders().toLowerCase();
	};

	this.getHttpHeader = function (name){
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		return req.getResponseHeader(name).toLowerCase();
	};

	this.getStyles();
	this.getScripts();
	this.getHttpHeaders();
	this.getHeaders();
}

$(document).ready(function (){
	console.log ('site carregado');
	chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse) {
			var content = new Content();
			// console.log(content.data);
			var dataJson = JSON.stringify(content.data);
			sendResponse (dataJson);
		}
	);
});
