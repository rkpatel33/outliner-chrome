"use strict";

$(document).ready(function() {

    // Add listener for messages from extension
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {

        // Toggle sidebar
        if (request.command == "toggle") {
            $('#outliner-sidebar-frame').toggle(500);
            console.log('Toggle command recieved');
        }

    });

    var charSet = 'ABCDEFG`HI`JKLMNOPQRSTUVWXYZ0123456789';
    var charSetSize = charSet.length;
    var generateRandomId = function(charCount) {
        var id = '';
        for (var i = 1; i <= charCount; i++) {
            var randPos = Math.floor(Math.random() * charSetSize);
            id += charSet[randPos];
        }
        return id;
    };


    // Append font awesome
    $('head').append('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">');

    // Create container for sidebar html
    var sidebarFrame = $("<div></div>").attr({'id' : 'outliner-sidebar-frame'});
    var sidebarContents = $("<div></div>").attr({'id' : 'outliner-sidebar-contents'});
    sidebarFrame.append(sidebarContents);

    var headerTags = $("h1:visible, h2:visible, h3:visible, h4:visible, h5:visible, h6:visible");
    var sidebarLinks = [];

    for (var i = 0; i < headerTags.length; i++) {

        var header = headerTags.eq(i);
        // Remove all non-printable characters an # characters
        var headerText = header
            .text()
            .replace(/[^\x20-\x7E]+/g, '')
            .replace(/#/g, '')
            .trim();

        // Grab or add an id for the header
        var headerID = header.attr('id');
        if (headerID === undefined) {
            headerID = generateRandomId(10);
            header.attr('id', headerID);
            // headerTags.eq(i).replaceWith(header.html);
        }

        // create new link to the
        var sideBarHeader = $(
            "<" + header.prop('tagName') + ">",
            {
                text: headerText,
                class: "sidebar-header"
            }
        );
        var sidebarLink = $("<a>", {href: "#" + headerID});

        // append onto side panel one at a time
        sidebarLink.append(sideBarHeader);
        sidebarContents.append(sidebarLink);

    }

    $('body').append(sidebarFrame);
    sidebarFrame.toggle(false);

    console.log('load sidebar.js');

});


