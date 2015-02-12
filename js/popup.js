console.log ('frontendler inspector | popup.js');
var dados;
chrome.tabs.getSelected(null,
    function(tab) {
        chrome.tabs.sendRequest(tab.id, 'mensagem', function(response) {
            console.log (response);
            dados = JSON.parse(response);
            console.log (dados);
            $('.title').html("" + dados.title);
            $('.description').html("" + dados.description);
            $('.viewport').html("" + dados.viewport);
            $('.og-title').html("" + dados.ogTitle);
            $('.og-image').html("" + dados.ogImage);
        }
    );
});
