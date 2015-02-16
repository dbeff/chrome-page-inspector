console.log ('frontendler inspector | content.js');
var dados = {};


function getHeaders (){
	var req = new XMLHttpRequest();
	req.open('GET', document.location, false);
	req.send(null);
	var headers = req.getAllResponseHeaders().toLowerCase();
	return headers;
}


function getData (){
    //HTML
    dados.title = $('title').html();
    dados.description = $("meta[name='description']").attr('content');
    dados.viewport = $("meta[name='viewport']").attr('content');

    //META
    dados.ogTitle = $("meta[property='og:title']").attr('content');
    dados.ogImage = $("meta[property='og:image']").attr('content');
	dados.headers = getHeaders();
    console.log(dados);
    return JSON.stringify(dados);
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        sendResponse (getData());
    }
);
