chrome.action.onClicked.addListener(function() {
    chrome.windows.create({
        url: "popout.html",
        type: "popup",
        width: 8000,
        height: 600,
        focused: true
    })
})