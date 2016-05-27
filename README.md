-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
----------------------- Project 3: USER LOGIN SYSTEM --------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------



---------------------------------------------------------
-- Video 10: PROJECT INFO -------------------------------
---------------------------------------------------------

*PROJECT DESCRIPTION AND FEATURES


- Custom login and registration system
- Mongo DB
- Mongoose ORM (Object Relational Mapper) - interface to deal with mongo db
- Passport User Authentication
	- User authentication module
	- Secure
- Bcrypt Encryption
- Full User Login/Registrarion system

*PROJECT SECTIONS


s1) Introduction
s2) MongoDB install & Setup
s3) Application and Middleware Setup
s4) Views and Layouts
s5) User Registration
s6) Password encryption with bcrypt
s7) User Authentication with Passport
s8) Logout and Access Control

videos 10 to 20



---------------------------------------------------------
-- Video 11: Mongo DB Install & Setup -------------------
---------------------------------------------------------

In order to install correctly mongdb we need to:

create a directory in c:/mongoodb
create a directory in c:/mongoodb/data
create a directory in c:/mongoodb/log
create a directory in c:/mongoodb/data/db

run msi installer (https://www.mongodb.com/download-center#community) R2 or latter

choose custom
Change the directory from C:/programfiles/.. to C:/mongodb/
Proceed

open cmd (as administrator):
cd ..\mongodb\bin

Now we gonna tell the system which folder to use for data an which one to use for log

mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongodb.log --logappend
 - logappend: do not overwrite the log, append
 - rest: allows us to use rest
 - install: install mongo as a service 

To test run the follow:
	net start MongoDB 

The MongoDB service is starting.
The MongoDB service was started successfully. (Y)

from that directory we can call mongo by:
	mongo

Now we can test and play with it

- show all databases: show dbs
- to create a new database: use name_of_my_database (for this class use nodeauth)
- Show all collections inside that databse: show collections
- Create a new collection: db.createCollection('nameOfMyCollection'); (users for this video)
- Including fields: db.users.insert({})
	- There are no scheemas in mongodb, so you don't have to especfy (i had to in the previous video series (inside nodeJS))
	-  db.users.insert({name:'Guilherme Oliveira',email: 'guilherme@evnts.com.br', username:'farm', password:'1234'});
	- MongoDB creates ids for you
- Find users: db.users.find();
- Prettifing the results: db.users.find().pretty();

-updating correctly: db.users.update({username:'farm'},{$set:{email:'guilhermeborgesoliveira@gmail.com'}});


For more information( https://docs.mongodb.com/manual/)

---------------------------------------------------------
-- Video 12: Applicatin Middleware Setup ----------------
---------------------------------------------------------

- Instead of doing express nameofmyproject you can create a folder, cd on it and then call express 

-connect-flash (package.json) ??

- passport-facebook: Would help you to login with facebok on the system

- multer: Help us to work with files
	- Multer is not working, I've commented its lines on the package.json in order to follow with teh tutorials


---------------------------------------------------------
-- Video 13: PROJECT INFO--------------------------------
---------------------------------------------------------

---------------------------------------------------------
-- Video 14: PROJECT INFO--------------------------------
---------------------------------------------------------






#################################################################################
##-----------------------------------------------------------------------------##
##-----------------------------------------------------------------------------##
##--------------- Project 2: BASIC EXPRESS WEBSITE (EMAIL) --------------------##
##-----------------------------------------------------------------------------##
##-----------------------------------------------------------------------------##
#################################################################################


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