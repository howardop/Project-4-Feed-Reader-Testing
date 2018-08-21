/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Feed URL defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feed name defined', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });

    });


    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu is hidden', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('Menu changes visibility', function(){
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            // Simulate menu click - hides menu
            menu.click(); 
            expect(body.classList.contains('menu-hidden')).toBe(false);

            // Simulate menu click - restores menu
            menu.click();  // Simulate menu click
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });
    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('At least 1 entry in feed', function() {
            const entry = document.querySelector('.entry');
            expect(entry !== null).toBe(true);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        
        /* Test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feed0,
            feed1;

        beforeEach(function (done) {
            loadFeed(0, function () {
                feed0 = document.querySelector('.feed').innerHTML;
                // Place the 2nd loadFeed inside the callback for the first to guarantee 
                // that it doesn't execute until the first one compleses
                // and thus both loadFeeds complete before executing the test below.
                loadFeed(1, function () {
                    feed1 = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        /* Check that contents change when new feed have been added */
        it('Content changes', function (done) {
            expect(feed0 !== feed1).toBe(true);
            done();
        });
    });
}());
