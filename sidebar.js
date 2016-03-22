$(document).ready(function() {

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

        // grab or add an id for the header
        headerID = header.attr('id');
        if (headerID === undefined) {
            // headerText = header.contents().eq(0).text().trim();
            headerText = header.text().trim();
            console.log(headerText);
            headerID = headerText.replace(/ /g,'_');
            header.attr('id', headerID);
        }

        // create new link to the
        sideBarHeader = $(
            "<" + header.prop('tagName') + ">",
            {
                id: headerID,
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


