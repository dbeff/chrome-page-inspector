console.log ('frontendler inspector | content.js');
var dados = new Object;

function getData (){

    //HTML
    dados.title = $('title').html();
    dados.description = $("meta[name='description']").attr('content');
    dados.viewport = $("meta[name='viewport']").attr('content');

    //META
    dados.ogTitle = $("meta[property='og:title']").attr('content');
    dados.ogImage = $("meta[property='og:image']").attr('content');
    console.log(dados);
    return JSON.stringify(dados);
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        sendResponse (getData());
    }
);
