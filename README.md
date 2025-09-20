# cat-shelter-sep-2025-express

SoftUni JS Back End Course Project re-written with express/hbs

## Development Setup

### Setup

-  [x] Initialize Project
-  [x] Add Express Server `npm i express`
-  [x] Add Workshop Resources
-  [x] Setup Handlebars `npm i express-handlebars`
-  [x] Setup static files
-  [x] Add Launch Debugger
-  [x] Add Layout
-  [x] Render home page
-  [x] Add dynamic rendering for title and searchForm (visible only for the home page)
-  [x] Add 404 page

### Architecture (3 layer - Controller, Service, Data/Model) and Dynamic rendering

-  [x] Add home controller
-  [x] Add cat data layer
-  [x] Add cat service
-  [x] Render dynamic cat on home page
-  [x] Show no cat screen

### Create Cat

-  [x] Add Cat Controller
-  [x] Show create cat page
-  [x] Ready body data
-  [x] Create cata
   -  [x] Add action
   -  [x] Add service
   -  [x] Add model method for creating cat
-  [x] Redirect after creation
-  [x] Add unique if for each created cat `npm i uuid`

### Add Breed

-  [x] Add Breed Controller
-  [x] Update the routes
-  [x] Show create breed page
-  [] Create breed
   -  [] Add action
   -  [] Add service
   -  [] Add model method for creating breed
-  [] Redirect after creation

### Details

-  [] Add navigation button for detail page
-  [] Add route with param for details page
-  [] GetOne movie from service
-  [] Find movie by id from model
-  [] Render details page with dynamic data

### Search

-  [x] Render all cats
-  [] Modify search form
-  [] Filter cat
-  -  [] By Name
-  -  [] By Breed
-  [] Remember search words

## Additional

-  [x] Add nodemon and change the debugger to include nodemon `npm i nodemon`
-  [x] Add dotenv for secrets and ports `npm i dotenv`
-  -  [x] Add .env.example for the .env environment setup
