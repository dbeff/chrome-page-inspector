console.log ('content.js');
var dados = [];

function getData (info){
    dados.body = 'body: ' + ($('body').size() > 0);
    dados.modal = 'modal: ' + ($('.modal').size() > 0);
    return dados[info];
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        // recetxt=request.greeting;
        // alert(recetxt);
        console.log (request);
        console.log (sender);
        console.log (sendResponse);
        console.log (getData(request));
        sendResponse (getData(request));
    }
);
