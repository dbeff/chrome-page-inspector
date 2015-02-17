console.log ('frontendler inspector | content.js');

function Content (){
	this.data = {};
	this.data.meta = {};
	this.data.meta.title = $('title').html();
	this.data.meta.description = $("meta[name='description']").attr('content');
	this.data.meta.keywords = $("meta[name='keywords']").attr('content');
	this.data.meta.viewport = $("meta[name='viewport']").attr('content');

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
	this.data.script = '';
	this.data.style.links = [];

	this.data.headers = '';


	this.getStyles = function (){
		var elements = document.querySelectorAll("link[rel='stylesheet']");
		for (var i = 0; i < elements.length; i++){
			this.data.style.links.push(elements[i].getAttribute('href'));
		}
	};

	this.getHeaders = function (){
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		this.data.headers = req.getAllResponseHeaders().toLowerCase();
	};

	this.getHeader = function (name){
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		var header = req.getResponseHeader(name).toLowerCase();
		return header;
	};


	this.chromeOnRquest = function (){
		var dataJson = JSON.stringify(this.data);
		chrome.extension.onRequest.addListener(
			function(request, sender, sendResponse) {
				sendResponse (dataJson);
			}
		);
	};

	this.getStyles();
	this.getHeaders();
	this.chromeOnRquest();
}


new Content();




