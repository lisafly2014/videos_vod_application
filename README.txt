ACCEDO VOD TEST APPLICATION
===========================

This  application allows scrolling a list of videos in a horizontal carousel and play selected videos.

##Set-Up Locally
---

1. Install nodejs (http://nodejs.org/download/)
2. Clone or download the project in to pc
3. Run ``` npm install ``` install dependent modules in node_modules
4. Run ``` bower install ``` install bower_components
5. Run ``` node app.js```or ```nodemon app.js" to run the application


## Features

- Load a list of videos from an api(https://demo2697834.mockable.io/movies)
- Alllows to select a video from the view and play in full screen
- User can use either mouse or keyboard left, right arrow keys to select a video
- User can play video by clicking the play button of a video tile or by pressing enter key once seleted a tile.
- Once a video finishes playing or is closed , full screen video view will be close
- Use localStorage to store data for history view purpose.

##Unfinished Features
--When viewed video and click history, history viewed video's time sort has bug
--responsive layout does not work now
--Left and right scroll is not that smooth