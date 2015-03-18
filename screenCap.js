/*
This is a basic script that will take a screenshot
of the website passed in as an arguement.
More commandline arguements can be added to specify username and password,
and used information for adding or editing a user.
User information cna aslo be promtped for.
This script can be made longer better to test the
tangelo website once it is up and running.
*/


//Create new Date object to get a tinestamp
var timeStamp = new Date();

//Web page is created
var page = require('webpage').create();
var system = require('system');
//Takes in a commandline arguement
var url= system.args[1];

//The page opens the address we want
page.open(url);
/*After opening the webpage run onLoadFinsihed.
If the page loads then it will take and save a screenshot.
The number is in ms and is the time we give for the page to load,
before it times out.
*/
page.onLoadFinished= function() {
            window.setTimeout(function () {
            //Take a timestamp and render image
            var pic=timeStamp.getTime();
            pic+=".png"
            page.render(pic);
            phantom.exit();
          }, 5000);
  }
