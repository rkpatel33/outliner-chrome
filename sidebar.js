$(document).ready(function() {

    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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

    // Fonte awesome
    // $('head').append('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">');

    // Container for siebar html
    var sidebarFrame = $("<div></div>").attr({'id' : 'outliner-sidebar-frame'});
    var sidebarContents = $("<div></div>").attr({'id' : 'outliner-sidebar-contents'});
    sidebarFrame.append(sidebarContents);

    var headerTags = $("h1, h2, h3, h4, h5, h6");
    var sidebarLinks = [];
    for (var i = 0; i < headerTags.length; i++) {

        header = headerTags.eq(i);
        headerText = header.text().trim().replace(/[^\x20-\x7E]+/g, '');

        // grab or add an id for the header
        headerID = header.attr('id');
        if (headerID === undefined) {
            console.log(headerText);
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

        // append onto side panel
        sidebarLink.append(sideBarHeader);
        sidebarContents.append(sidebarLink);

    }

    $('body').append(sidebarFrame);

    console.log('load sidebar.js');

});


