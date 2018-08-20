# Application Overview
This application reads RSS feeds and displays entries to the user.

The application is capable of presenting multiple feeds to the user.  The user can open a menu that displays the available feeds by  clicking on the  hamburger in the upper left hand corner.  Then simply click on a feed in the menu to see a list of the entries.

# Adding Feeds to the Application
New feeds can be added to the application by adding an object containing the `name and URL of the feed` to the `allFeeds` array defined on line 10 in `app.js`.  For example to add the Microsoft Azure Blog RSS feed to the application, simply add 
```
    {
        name: 'Microsoft Azure Blog',
        url: 'https://azure.microsoft.com/en-us/blog/feed'
    }
```
to allFeeds[].    
