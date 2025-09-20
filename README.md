# cat-shelter-sep-2025-express

SoftUni JS Back End Course Project re-written with express/hbs

## Development Setup

### Setup

- [x] Initialize Project
- [x] Add Express Server `npm i express`
- [x] Add Workshop Resources
- [x] Setup Handlebars `npm i express-handlebars`
- [x] Setup static files
- [x] Add Launch Debugger
- [x] Add Layout
- [x] Render home page
- [x] Add dynamic rendering for title and searchForm (visible only for the home page)
- [x] Add 404 page

### Architecture (3 layer - Controller, Service, Data/Model) and Dynamic rendering

- [x] Add home controller
- [x] Add cat data layer
- [x] Add cat service
- [x] Render dynamic cat on home page
- [x] Show no cat screen

### Create Cat

- [x] Add Cat Controller
- [x] Show create cat page
- [x] Ready body data
- [x] Create cata
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating cat
- [x] Redirect after creation
- [x] Add unique if for each created cat `npm i uuid`

### Add Breed

- [x] Add Breed Controller
- [x] Update the routes
- [x] Show create breed page
- [x] Create breed
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating breed
- [x] Redirect after creation
- [x] Add Dynamic cat Breed in the Create Cat Page

### Edit Cat

- [x] Add edit action
- [x] Show edit cat page
- [x] Add edit routes
- [x] Add getById method to cat service
- [x] Add findById and findByIdAndUpdate methods to Cat model
- [x] Persis value on edit
- [x] Add dynamic breed in form option
- [x] Redirect after edit

### Delete Cat

- [x] Add delete action
- [] Show delete cat page
- [] Add delete routes
- [] Persis value on delete
- [] Add dynamic breed in form option
- [] Redirect after delete

### Search

- [x] Render all cats
- [x] Update search form
- [x] Add search route in controller
- [x] Search by name and breed
- [x] Implement search service methods
  - [x] Add searchByName method to catService
  - [x] Add searchByBreed method to catService
- [x] Update search form to remember search terms
- [x] Add search results display
  - [x] Show "No cats found" message when no results

## Additional

- [x] Add nodemon and change the debugger to include nodemon `npm i nodemon`
- [x] Add dotenv for secrets and ports `npm i dotenv`
- - [x] Add .env.example for the .env environment setup
