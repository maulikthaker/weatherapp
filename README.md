weatherapp
==========

Weather app from weather-underground

This is an app developed to get the weather for any city within the US, with the help of weatherunderground.com that provides an API. The Weather Underground requires developer registration to leverage their free API. Upon registration you will receive a key, which is required for subsequent requests.

Instructions.

- Download node from nodejs.org.
- Make sure that node is installed by running node -v from the command line to give a version number
- Download the source code either clone it or download a zip file of the code ( I personally have used Source Tree )
- Once the code is donwloaded, go to the directory where package.json is found.
- Run the following command "npm install"
- It will create a folder "node_modules" where all the required node modules that are required to run this app, will be downloaded.
- Install bower using the following command "npm install bower"
- Run bower install. Which will install the following required modules ( eg. jquery, bootstrap etc ) for running this app.
- bower will use bower.json file for running the app.
- If you have everything working till this point, you should be able to run "npm start" without any errors.
- Go to any browswer and run "localhost:3000", it will build a page for you, that will automatically give the weather for 4 cities by defualt. If you want more cities, it will be appended to the end.


Here's How you can add more cities

- At the end of the line "localhost:3000", add the following
- "localhost:3000/?q=CITY,STATE|CITY,STATE|CITY,STATE"
- eg. http://localhost:3000/?q=San_Jose,CA|Los_Angles,CA
- The output will be a table with the default weather and the 2 added ( San Jose and LA ). 
- Demo image is under "/public/images/Output.png" file in the repo.


Any questions or concerns, please contact me, this is for a very special purpose, please don't keep runing the app, since the allowed key might get expired.











