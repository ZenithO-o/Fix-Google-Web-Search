# Fix Google Web Search

## Description
This userscript removes AI results and other unwanted content from Google web searches by adding the `udm=14` parameter to the search URL. This parameter switches the search to the "Web" tab, which displays only traditional web page results.

## Features
- Adds `udm=14` to the search parameters of a new Google search, switching to the "Web" tab.
- Updates all other `href^="/search"` links on the page to include a udm parameter.
- Works on all Google Top Level Domains (`.com`, `.co.uk`, `.ru`, `etc.`).

## Installation
1. Install a userscript manager extension like [Greasemonkey](https://www.greasespot.net/) (Firefox), [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) (Safari), [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge, Firefox, Safari), or [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge).
2. Copy the userscript code from the provided source file (`script.user.js`).
3. Follow your exension's instructions in creating/using a new userscript.
4. Save the userscript and enable it.

## Usage
Once installed and enabled, the userscript will automatically do the described functionality. No extra steps required!

## Personal notes
- This readme took longer to write than the code lol.
- Sorry you had to read all the `@match` params. Would have used `@include` for proper location matching, but Manifest V3 deprecates this feature.