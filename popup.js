console.log ('popup');

function getInfo (info){
    chrome.tabs.getSelected(null,
        function(tab) {
            chrome.tabs.sendRequest(tab.id, info, function(response) {
                console.log (response);
                $('.body').html(response);
            }
        );
    });
}

getInfo('body');
