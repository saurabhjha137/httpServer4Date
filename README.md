# httpServer4Date
Problem Statement :

Create a simple http server (with Nodejs or any language) and make it respond with answer to calendar questions like below :
- add, 6 days to today return the date
- add, 6 weeks to today return the date
- subtract, 187 days from 12-jan-2019 return the date


Solution :

from the url we are fetching the inputs and giving output for relevant action
run the app.js file to start the server
node app.js

Example URL :

http://localhost:8080/?operation=subtract&value=1&dayOrWeek=week&date=today
http://localhost:8080/?operation=add&value=10&dayOrWeek=day&date=today
http://localhost:8080/?operation=add&value=10&dayOrWeek=day&date=10-feb-2023

