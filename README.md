# Application Overview
This application reads RSS feeds and displays entries to the user.

The application is capable of presenting multiple feeds to the user.  The user can open a menu that displays the available feeds by  clicking on the  hamburger in the upper left hand corner.  Then simply click on a feed in the menu to see a list of the entries.

# Running the Application
1. Clone https://github.com/howardop/Project-4-Feed-Reader-Testing.git
2. Cd to frontend-nanodegree-feedreader/
3. Open index.html in a browser
4. The page will open in a tab with the title `UdaciFeeds`
    1. The top of the page is a green bar with the title of the feed being displayed, `CSS Tricks`. 
    2. To the left of the title is a hamburger that can be used to select a feed for viewing.  Click on the feed to see a list of the entires.
    3. Below the green bar is a list of the entries in the blog.  Click on an entry to read it.
5. Scroll to the bottom of the page to see the results of the Jasmine tests.  These tests can be found in `jasmine/spec/feedreader.js`.

# Adding Feeds to the Application
New feeds can be added to the application by adding an object containing the `name and URL of the feed` to the `allFeeds` array defined on line 10 in `js/app.js`.  For example to add the Microsoft Azure Blog RSS feed to the application, simply add 
```
    {
        name: 'Microsoft Azure Blog',
        url: 'https://azure.microsoft.com/en-us/blog/feed'
    }
```
to allFeeds[].    
