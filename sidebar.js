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
    debugger;
    var sidebarFrame = $("<div></div>").attr({'id' : 'outliner-sidebar-frame'});
    var sidebarContents = $("<div></div>").attr({'id' : 'outliner-sidebar-contents'});
    sidebarFrame.append(sidebarContents);

    var headerTags = $("h1, h2, h3, h4, h5, h6");
    for (var i = 0; i < headerTags.length; i++) {
        header = headerTags.eq(i);
        headerCopy = header.clone();
        sidebarContents.append(headerCopy);
    }

    $('body').append(sidebarFrame);

    console.log('load sidebar.js');

});


