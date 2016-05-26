$(document).ready(function() {

    var charSet = 'ABCDEFG`HI`JKLMNOPQRSTUVWXYZ0123456789';
    var charSetSize = charSet.length;
    generateRandomId = function(charCount) {
        var id = '';
        for (var i = 1; i <= charCount; i++) {
            var randPos = Math.floor(Math.random() * charSetSize);
            id += charSet[randPos];
        }
        return id;
    }


    // hover_button = "<div> \
    //     <div class='outliner-icon-container'> \
    //       <div class='outliner-icon-image'></div> \
    //     </div> \
    //   </div> \
    // ";

    // Font awesome
    $('head').append('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">');

    var imgURL = chrome.extension.getURL("outliner-icon.png");

    // Container for siebar html
    var sidebarFrame = $("<div></div>").attr({'id' : 'outliner-sidebar-frame'});

    // var buttonClose = $("<div><i class='fa fa-times-circle'></i></div>").attr({'id' : 'button-close'});
    var buttonClose = $("<div></div>").attr({'id' : 'button-close'}).append($("<img>").attr({'src' : imgURL}));
    var sidebarContents = $("<div></div>").attr({'id' : 'outliner-sidebar-contents'});


    sidebarFrame.append(sidebarContents);

    var headerTags = $("h1:visible, h2:visible, h3:visible, h4:visible, h5:visible, h6:visible");
    var sidebarLinks = [];
    for (var i = 0; i < headerTags.length; i++) {

        header = headerTags.eq(i);
        // Remove all non-printable characters
        headerText = header.text().trim().replace(/[^\x20-\x7E]+/g, '');

        // grab or add an id for the header
        headerID = header.attr('id');
        if (headerID === undefined) {
            headerID = generateRandomId(10);
            header.attr('id', headerID);
            // headerTags.eq(i).replaceWith(header.html);
        }

        // create new link to the
        sideBarHeader = $(
            "<" + header.prop('tagName') + ">",
            {
                text: headerText,
                class: "sidebar-header"
            }
        );
        sidebarLink = $("<a>", {href: "#" + headerID});

        // append onto side panel one at a time
        sidebarLink.append(sideBarHeader);
        sidebarContents.append(sidebarLink);

    }

    $('body').append(buttonClose);
    $('body').append(sidebarFrame);
    sidebarFrame.toggle(false);

    console.log('load sidebar.js');

    // Button close action
    $('#button-close').click(function() {
        $('#outliner-sidebar-frame').toggle(600);
    });

});


