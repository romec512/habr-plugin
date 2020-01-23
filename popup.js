document.getElementById('button-go').onclick = function () {
    chrome.tabs.executeScript(null,{file:"content.js"});
};
