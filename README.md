# Fix Google Web Search

## Description
This userscript removes AI results and other unwanted content from Google web searches by adding the `udm=14` parameter to the search URL. This parameter switches the search to the "Web" tab, which displays only traditional web page results.

## Features
- Adds `udm=14` to the search parameters of a new Google search, switching to the "Web" tab.
- Sets a session storage flag to only add the udm parameter the first time it is needed.
- Works on all Google Top Level Domains (.com, .co.uk, .ru, etc.).
- 
## Installation
1. Install a userscript manager extension like Greasemonkey, Tampermonkey, or Violentmonkey.
2. Copy the userscript code from the provided source file (`script.user.js`).
3. Create a new userscript in your userscript manager and paste the code.
4. Save the userscript and enable it.

## Usage
Once installed and enabled, the userscript will automatically do the described functionality. No extra steps required!

## Personal notes
- This readme took longer to write than the code lol
- Sorry you had to read all the `@match` params. Would have used `@include` for proper matching, but apparently Manifest V3 makes it weird or something, idk. Spent 3 minutes looking it up.