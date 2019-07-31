$(function(){

    var lenny = "( ͡° ͜ʖ ͡°)"
    var editable = null;
    $("input, textarea").mousedown(function(){
        // Capture the editable element
        editable = $(this);
        console.log($(this))
    });

    chrome.extension.onRequest.addListener(
        function(request, sender, sendResponse) {
            if (request.insertLennyFace === true) {
                editable.val(editable.val() + lenny );
                sendResponse({"insertedLennyFace": true});
            } else {
                sendResponse({"insertedLennyFace": false});
            }
        }
    );

});
