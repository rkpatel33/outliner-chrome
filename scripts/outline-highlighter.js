// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433

function isElementInViewport(el) {
    // Return true if element is in view port, else false
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

var updateOutline = () => {
    var outlineLinks = document.querySelectorAll(
        '#outliner-sidebar-contents a'
    );

    // Bold all outline links that correspond to showing elements
    outlineLinks.forEach((linkElement, i) => {
        // trime off the #
        let targetID = linkElement.getAttribute('href').substr(1);
        let targetElement = document.getElementById(targetID);

        // Apply formatting
        if (isElementInViewport(targetElement)) {
            $(linkElement.querySelectorAll('h1, h2, h3, h4, h5, h6')).addClass('in-view');
            // console.log(linkElement);
        } else {
            $(linkElement.querySelectorAll('h1, h2, h3, h4, h5, h6')).removeClass('in-view');
        }
    });
};

$(window).on('DOMContentLoaded load resize scroll', updateOutline);

