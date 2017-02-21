# outliner-chrome
Creates a sidebar with a table of contents of the current page. Adds a Chrome toolbar button that can be used to show/hide an outline of the webpage. This is a very basic implementation and not very smart, but works on most pages well enough to be useful, especially for long documentation pages.

![alt tag](https://github.com/rkpatel33/outliner-chrome/blob/master/screenshot1.png)

# Getting started

$ npm install

In Chrome:

1. Clone this repo.
2. Got to extensions settings: chrome://extensions/
3. Check `Developer mode`.
4. Click `Load unpacked extension...` and select folder where this repo is cloned.

# TODO

- add to blacklist button to build blocked sites
    + add and then close
- highlight first sentence of each <p> and dim out all other sentences
- debug on Paper
- hide/show buttons + effects -- study yinon code
    + don't reopen on close when on same site
    + preserve state on close?
- Inject html using iframe to isolate css and manage complex html 
    + http://stackoverflow.com/questions/15873904/adding-complex-html-using-a-chrome-content-script
- Inject HMTL so that it pushes the body to make it narrower
- Try to target the main portion of the body for parsin
- Highlght on scroll
    + http://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
- debug in Paper document

## Example pages

http://pandas.pydata.org/pandas-docs/stable/groupby.html

http://api.jquery.com/hide/

http://docs.xlwings.org/en/stable/api.html

