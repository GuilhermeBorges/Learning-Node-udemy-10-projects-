# Learning-Node-udemy-10-projects

Project 2:
 Express Basic Webpage

Project description and features:

- Installing & setup
- Rounting System
- Jade Templating
- Working with views
- Nodemailer Module


videos 6 to 9


---------------------------------------------------------
-- Video 07: --------------------------------------------
---------------------------------------------------------

npm install -g express
npm install -g express-generator


Generate our application:

express name_of_my_application
run npm install

Added:    "nodemailer": "*" to package_json ("*" means teh latest version)

run npm install


add in app.js the nodemailer

since in the package.json we have scripts (one that is start) we can run by doing npm start (instead of node app.js)


---------------------------------------------------------
-- Video 08: --------------------------------------------
---------------------------------------------------------

- routes/index.js
  res.render('index', { title: 'Express' }); //will render index.jade, passing a json object that will be variables to the view
  - layout.jade:
    - title= title
  - index.jade:
    - h1= title //Directing inserting the value
	- p Welcome to #{title} //Directing including in a sentence


- To change something accordingly with nodejs data take a look at layout.jade
- In order to create a new page:
	- Create a new jade file
	- Create a new route file
	- add the route to app.js
	- choose how to go to that page in app.js

---------------------------------------------------------
-- Video 09: --------------------------------------------
---------------------------------------------------------




Sending e-mail \o

- Aparrently i must be logged in Gmail so it can send the email :'(

DO NOT FORGET TO CHANGE THE PASSWORD TO YOUR REAL PASSWORD!!
(routes/contact.js)