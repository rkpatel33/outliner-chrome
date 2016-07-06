"use strict";

console.log('Loaded event-page.js');

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Clicked browser action icon on page ' + tab.url);

    // Send message to content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "toggle"});
    });

});
