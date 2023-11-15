## CONTENTS

- [Introduction](#introduction-cinematography-of-holocaust)
- [User Experience - UX](#user-experience)
  - [UX](#ux)
    - [Site purpose](#site-purpose)
    - [Site goal](#site-goal)
    - [Audience](#audience)
  - [User stories](#user-stories)
    - [First time user goals](#first-time-user-goals)
    - [Returning user goals](#returning-user-goals)
  - [Agile methodology](#agile-methodology)
  - [Design](#design)
    - [Colors](#colors)
    - [Typography](#typography)
    - [Media](#media)
    - [Database scheme](#database-scheme)
    - [Wireframes](#wireframes)
- [Features](#features)
  - [Existing features](#existing-features)
  - [Future features](#future-features)
- [Technologies used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks libraries, programs](#frameworks-libraries-programs)
- [Testing](TESTING.md)
- [Deployment](#deployment)
  - [General](#general)
  - [Repository/Workspace set up](#repositoryworkspace-set-up)
  - [Backend/API](#backendapi)
  - [Frontend/Project unification](#frontendproject-unification)
  - [Deployment of both applications](#deployment-of-both-applications)
  - [Conclusion: Heroku settings & deployment](#conclusion-heroku-settings--deployment)
- [Credits](#credits)

# Introduction: Cinematography of Holocaust

This is the Project Portfolio 5 for Code Institute Full-stack development program. Cinematography of Holocaust is a Django Rest Framework and React.js project that runs on Heroku.

The site allows users to register and log in from the frontend. Once registered and logged in users can edit their profile, add, edit and delete movies and glossary items.

The live website on Heroku can be accessed at the following link: [View my Live Website here](https://cinematography-455aca732715.herokuapp.com/)

![Cinematography of Holocaust](/documentation/design/cinematography-website.png)

# User Experience

<a href="#top">Back to the top.</a>

## UX

### Site purpose

This site is designed to invite everyone to add movies about the Holocaust and thus contribute to a comprehensive cinematography of Holocaust. Everyone can help facilitate the exchange of movies across national borders.

### Site goal

The goal of the site is to appeal to international users and encourage them to add movies about the Holocaust, thus making movies visible across national borders. Many movies are not subtitled or are imported or shown in other countries. This is where an exchange should take place to keep the memory alive across all borders. Such a tool does not (yet) exist in Germany and the [Cinematography of Holocaust from the Fritz-Bauer-Institut](http://cine-holocaust.de/site/cdh.php) was last updated in 2015.

### Audience

For anyone who wants to share movies about the Holocaust and keep the memory alive across all borders.

## User stories

### First time user goals

- As a first time user I can find information what the purpose of the website is.

### Returning user goals

- As a (returning) user, I can sign up for an account so that I can sign in after registration.
- As a returning user, I can sign in to my registered account.
- As a returning user, I can sign out of my registered account.
- As a returning user, I can edit the content and picture of my profile.
- As a returning user, I can change my password if I'm logged in.
- As a returning user I can add, edit and delete movies and glossary items.
- As a returning user I can add movies to my wishlist.
- As a returning user, I can delete movies from my wishlist.
- As a returning user, I can add, edit and delete comments on movies.
- As a returning user, I can search for movies.
- As a returning user, I can search filter movies by genre categories.
- As a returning user I can visit other profiles.

## Agile methodology

The principles of agile methodology were utilized during the project. Github issues were used to create user stories for the project. Each user story (including user acceptance criteria, tasks and story points) can be displayed on the board or in the issues. By assigning user stories to issues and taking advantage of the GitHub Kanban board functionality, the necessary goals and priorities throughout the project could be well defined. In addition, labels were used to further define the priority of each user story in the Kanban board.

Through the use of the Kanban board in the projects view in Github, the project was divived into a few different sections:

- Add-ons
- Todo
- In Progress
- Done

Milestones were used to create sprints. There were 4 sprints each dated appropriately. User stories were completed based on the current sprint in progress. Each sprint was completed on time.

## Design

### Colors

I decided to use only basic colors, mainly white and shades of black. The colors black and white are typical symbols of the past - especially in movies. Also, the subject of the Holocaust is not one that allows for a colourful palette. I only used different shades of blue as an accent colour. Blue is the typical business colour because it is sober, businesslike, reassuring and trustworthy, and it retains its character even in different shades. It is best suited to the purpose of the website. To maintain the contrast between the background and the text, a basic black and a light grey are included. All the colors also relate to the existing Bootstrap colors (e.g. primary, light and dark).

![Colors basic](/documentation/design/basic-colors.png)
![Colors shades of blue](/documentation/design/shades-blue.png)

### Typography

I chose Times New Roman because it is a sans serif font, which is generally easy to read. It is simple and professional. It also gives a calm and serious impression.

### Media

The pictures (logo, image for home, favicons) were taken from [Pixabay](https://pixabay.com/). The images for the movies are self-made screenshots. Most of the texts are from [Wikipedia](https://en.wikipedia.org/wiki/Main_Page).

### Database scheme

The database model reflects the different areas of the website: the user model, which is used for all other models, the "Profile" model, the entries for the movies through the "Movie" model, the entries for the glossary entries through the "Glossary" model, the entries for the comments through the "Comment" model and the entries for the wishlist through the "Wishlist" model.

![Database scheme](/documentation/design/database-schema.png)

### Wireframes

Initial wireframes

#### Home page

![Home page first screen](/documentation/wireframes/homepage.png)

#### Sign up

![Sign up](/documentation/wireframes/sign-up.png)

#### Sign in

![Sign in](/documentation/wireframes/sign-in.png)

#### Profile

![Profile](/documentation/wireframes/profile.png)

#### Movies page

![Movies page](/documentation/wireframes/all-movies.png)

#### Add a movie

![Add a movie](/documentation/wireframes/add-movie.png)

#### Single movie

![Single movie](/documentation/wireframes/single-movie.png)

#### Glossary page

![Glossary page](/documentation/wireframes/glossary.png)

#### Wishlist

![Wishlist](/documentation/wireframes/wishlist.png)

# Features

<a href="#top">Back to the top.</a>

## Existing features

- **Home page**

  - The home page shows information about the site and a FAQ toggle briefly explains the most important things.
  - The image emphasises the aim of the page.
  - The homepage also features the three latest movie entries and a button that leads to the movie catalogue.

  ![Home page introduction](/documentation/features/homescreen-1.png)
  ![Home page information](/documentation/features/homescreen-2.png)
  ![Home page movies](/documentation/features/home-newest-movies.png)

- **Navigation Bar**

  - The navigation bar appears on each page.
  - The home page can be displayed by clicking on the logo on the left side.
  - The navigation bar for unauthenticated users contains links to the home screen (via de logo and via the link), movies page, glossary page, sign in and sign up.

  ![Navigation bar unauthenticated users](/documentation/features/navbar-unauthenticated.png)

  - The navigation bar for authenticated users contains links for the home page (via de logo and via the link), movies page, glossary page, wishlist and sign out. There is also a link to add movies next to the logo.

  ![Navigation bar authenticated users](/documentation/features/navbar-authenticated.png)

  - The navigation bar will allow the users to easily navigate from page to page across all devices.
  - The navigation bar is fully responsive. On smaller devices, the hamburger menu appears with an expanded menu bar.

  ![Navigation bar unauthenticated users mobile](/documentation/features/navbar-mobile-open.png)

  ![Navigation bar authenticated users mobile](/documentation/features/navbar-mobile-authenticated.png)

- **Sign up**

  - The page is intended for new users to sign up.
  - The users have to enter a username and the password twice.
  - They can find some information about the password criteria if they don't meet them.

  ![Sign up](/documentation/features/sign-up.png)
  ![Password criteria](/documentation/features/sign-up-password-criteria.png)

- **Sign in**

  - The page is intended for registered users to sign in.
  - The users have to enter their username and the password.

  ![Sign in](/documentation/features/sign-in-form.png)

- **Sign out**

  - The button is intended for registered and logged in users to sign out.
  - By clicking on the button, the users are logged out and redirected to the home page.

  ![Sign out](/documentation/features/sign-out.png)

- **Profile**

  - Logged in users will find their profile on this page.
  - On the side of the profile card the user will find a drop down menu to edit their profile and/or change their password.
  - Their profile contains their username and a summary of the movies and glossary entries they have created.
  - Below this summary, the user can find the movies and glossary entries they have created.

  ![Profile](/documentation/features/profiles-page-with-content.png)

  - Users can visit other users profiles by clicking on their username.

- **Edit profile**

  - Logged in users can edit their profile by clicking on the drop down button in their profile card.
  - Users can edit their profile content and/or profile picture.

  ![Edit profile](/documentation/features/profile-edit-form.png)

- **Change password**

  - Logged in users can change their password by clicking on the drop down button in their profile card.
  - Users must enter their new password twice.

  ![Change password](/documentation/features/change-password-in-profile.png)

- **Messages**

  - Messages are displayed for almost every relevant operation on the site, e.g. information about registering, logging in, logging out, adding, editing, deleting.
  - All messages are displayed for five seconds and can be dismissed with the x button in the right-hand corner.

  ![Message success](/documentation/features/message-registered.png)
  ![Message warning](/documentation/features/message-unauthorized.png)

- **Movies page**

  - Here users can browse all the movies.
  - Users can view movies, three in each column, with the owner's name, creation and update dates, title, image, release, director and a snippet of content.
  - Users can see how many comments a movie has or how many times it has been added to a wishlist.
  - If there are no movies, this is displayed to the users.

  ![Browse all movies - empty](/documentation/features/movies-empty.png)
  ![Browse all movies](/documentation/features/movies-page.png)

  - Users can search for movies by username, title, release, director and content keywords.

  ![Search by username](/documentation/features/search-by-username.png)
  ![Search by title](/documentation/features/search-by-title.png)
  ![Search by release](/documentation/features/search-by-release.png)
  ![Search by director](/documentation/features/search-by-director.png)
  ![Search by content keywords](/documentation/features/search-by-keywords.png)

  - Users can filter movies by specific genre categories.

  ![Filter movies](/documentation/features/filter-movies.png)

  - By clicking on the username on the movie card, users can visit their profile.
  - By clicking on the movie title or movie image, users can visit the individual movie page.
  - When logged in, users can add movies to their personal wishlist by clicking on the icon.
  - When logged in, users can delete movies from their personal wishlist by clicking on the icon.
  - Logged in users cannot add their own movies to their wishlist.

- **Single movie with comments**

  - This page allows users to view a single movie with all the comments.
  - Users can view movies, three in each column, with the owner's name, creation and update dates, title, image, release, director and a snippet of content.
  - Users can see how many comments a movie has or how many times it has been added to a wishlist.

  ![Single movie](/documentation/features/single-movie.png)
  ![Single movie dropdown](/documentation/features/movie-edit-delete-dropdown.png)

  - When logged in, users can add movies to their personal wishlist by clicking on the icon.
  - When logged in, users can delete movies from their personal wishlist by clicking on the icon.
  - Logged in users cannot add their own movies to their wishlist.

  ![Cannot add to wishlist](/documentation/features/wishlist-cannot-add-own-movie.png)

  - If users are logged in, they can add comments to all movies, even if they have created them.
  - A comment cannot be empty.
  - If a user has posted a comment, they can edit and/or delete their comment by clicking on the three dots to go to the drop down icons.

  ![Comment section](/documentation/features/movie-with-comment.png)
  ![Edit comment](/documentation/features/comment-edit-form.png)

  - If the user is the owner of the movie, he/she can edit or delete it by clicking on the three dots to get to the drop-down icons.
  - Clicking the delete icon will delete the comment. There is no extra confirmation.

  ![Delete comment](/documentation/features/comment-deleted.png)

  - **Add a movie**

  - Users can add a movie by clicking the 'Add Movie' button in the navbar.
  - After clicking the button, the Add Movie form will appear.
  - Users must enter a title, release, director, and select a category.
  - The image and content fields can be left blank.

  ![Add movie form](/documentation/features/add-movie-form.png)

- **Edit a movie**

  - If the user is the owner of the movie, he/she can edit it by clicking on the three dots to get to the drop-down edit icon on the single movie page.
  - Every item can be changed.

  ![Edit movie form](/documentation/features/edit-movie-form.png)

- **Delete a movie**

  - If the user is the owner of the movie, he/she can delete it by clicking on the three dots to get to the drop-down delete icon on the single movie page.
  - Clicking the delete icon will delete the movie. There is no extra confirmation.

  ![Delete movie message](/documentation/features/message-movie-deleted.png)

- **Glossary(s) page**

  - This site allows users to browse all the glossary items.
  - All glossary items are sorted alphabetically.
  - Users can see the name of the user who created the item and the creation date, as well as the name of the user who updated the item and the update date, by opening the toggle.

  ![Browse all glossary items](/documentation/features/glossary-unauthenticated.png)

  - If there are no movies, this is displayed to the users.

  ![Empty glossary](/documentation/features/empty-glossary-unauthenticated.png)

  - Users can search for glossary items by title.

  ![Search glossary items](/documentation/features/glossary-search.png)

  - When logged in, users can add glossary items by clicking on the button.
  - When logged in, users can edit and/or delete glossary items by clicking on the three dots to go to the drop down icons.

  ![Glossary page authenticated users](/documentation/features/glossary-authenticated-can-edit.png)

- **Single glossary item**

  - This page appears only if a user has added a new glossary item or if a user has the specific link to a single glossary item.
  - Users can see the name of the user who created the item and the creation date, as well as the name of the user who updated the item and the update date, by opening the toggle.
  - Once logged in, users can edit any glossary item, but only the creator of a glossary item can delete it by clicking on the three dots to access the drop-down icons.

  ![Single glossary item](/documentation/features/glossary-single-item.png)

- **Add a glossary item**

  - Users can add a glossary item by clicking the 'Add glossary item' button on the glossary page.
  - After clicking the button, the 'Add a glossary item' form will appear.
  - Users will need to enter a title and content, so no field can be blank.
  - Titles are converted to capital letters.
  - Titles are unique so that a glossary item does not appear twice.

  ![Add a glossary item form](/documentation/features/glossary-create-form.png)
  ![Warnings](/documentation/features/glossary-unique-message-not-blank.png)

- **Edit a glossary item**

  - Once logged in, users can edit any glossary item by clicking on the three dots on the glossary page or the single glossary item page to access the drop-down icons.
  - Every field is editable.

  ![Edit glossary item form](/documentation/features/edit-glossary-form.png)

- **Delete a glossary item**

  - If the user is the creator of the glossary item, he/she can delete it by clicking on the three dots to get to the drop-down delete icon on the glossary page or the single glossary item page.
  - Clicking the delete icon will delete the glossary item. There is no extra confirmation.

  ![Delete glossary item message](/documentation/features/message-glossary-deleted.png)

  - If the user is not the creator of the glossary item, a warning is displayed that the item cannot be deleted.

  ![Delete glossary item message warning](/documentation/features/message-glossary-delete-only-creator.png)

- **Wishlist page**

  - Once logged in, users can see their personal wishlist with movies here.
  - Users can view movies, three in each column, with the owner's name, creation and update dates, title, image, release, director and a snippet of content.
  - Users can see how many comments a movie has or how many times it has been added to a wishlist.
  - Users have the same functionality to browse, search and filter movies in their wishlist as on the movies page.

  ![Wishlist - empty](/documentation/features/wishlist-empty.png)
  ![Wishlist](/documentation/features/wishlist.png)

  - By clicking on the username on the movie card, users can visit their profile.
  - By clicking on the movie title or movie image, users can visit the individual movie page.
  - Users can delete movies from their personal wishlist by clicking on the icon.
  - Clicking the delete icon will delete the movie from the wishlist. There is no extra confirmation.

  ![Wishlist - delete movie](/documentation/features/wishlist-deleted.png)

- **404 page**

  - When users click on a link that does not exist, they are automatically redirected to a 404 page.
  - There they are informed of the non-existent page and can click the "Back to Home" button to return to the home page.

  ![404 page](/documentation/features/404-page.png)

## Components

The following diagram illustrates the structure of the individual React components and pages:

![Components - part 1](/documentation/features/components-part-1.png)
![Components - part 2](/documentation/features/components-part-2.png)

Custom components were created to enable the code and functionality to re-used throughout the foodSNAP app

- [AlertPopUp.js](/frontend/src/components/AlertPopup.js) was created to enable messaging on user success and error actions
- [Asset.js](/frontend/src/components/Asset.js) was created to display a spinner when data is being fetched to notify the user that an action is being performed
- [Avatar.js](/frontend/src/components/Avatar.js) was created to display the users profile image throughout the app
- [MoreDropdown.js](/frontend/src/components/MoreDropdown.js) was created for authenticated users to be able to edit and/or delete content
- [NavBar.js](/frontend/src/components/NavBar.js) was created to display the navigation menu and display different icons depending on if the user is logged in or not
- [NotFound.js](/frontend/src/components/NotFound.js) was created to display a message to the user if the content they are looking for does not exist
- [ScrollToTop.js](/frontend/src/components/ScrollToTop.js) was created to scroll the user back to the top of the page
- [Searchbar.js](/frontend/src/components/Searchbar.js) was created to search movies on different pages

[Movie.js](/frontend/src/pages/movies/Movie.js) and [Glossary.js](/frontend/src/pages/glossary/Glossary.js) were also used on several pages, e.g. the three latest films on the homepage or both elements on the profile page.

### Custom hooks

- [useAlert.js](/frontend/src/hooks/useAlert.js) hook was created to call the alert messaging in the app
- [useClickOutsideToggle.js](/frontend/src/hooks/useClickOutsideToggle.js) was created close the expanded menu on a click outside the menu at every stage in the app
- [useRedirect.js](/frontend/src/hooks/useRedirect.js) was created to redirect the user to the homepage based on their userAuthStatus

### Custom context

- [AlertContext.js](/frontend/src/contexts/AlertContext.js) was created to allow the alert functionality to be used at every stage in the app
- [CurrentUserContext.js](/frontend/src/contexts/CurrentUserContext.js) was created to get the current users authentication state and redirect the user to the signin page if not signed in.
- [ProfileDataContext.js](/frontend/src/contexts/ProfileDataContext.js) was created to setProfileData, handleFollow, handleUnfollow of user profiles and access this data throughout the app.

## Future features

- For a future version, the ability to change the password if the user forgets it could be added.
- A future version could add the ability to add an email address to the account itself.
- In a future version, other registration/login options - e.g. via Google or Github - could be added.
- For a future version, the ability to add the country of production for movies could be added.
- For a future version, the scroll-to-top button could be improved so that it only appears when a user scrolls down.
- In a future version, the glossary item drop down list could be improved so that the delete icon only appears for the creator of the item.

# Technologies used

<a href="#top">Back to the top.</a>

## Languages

- Python
- JavaScript
- HTML5
- CSS3

## Frameworks, libraries, programs

### General

- [Git](https://git-scm.com/)
  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub
- [Github](https://github.com/)
  - GitHub was used to store the project's code after being pushed from Git
- [Am I Responsive](http://ami.responsivedesign.is/)
  - Am I responsive was used to create the multi-device mock-up you can see at the start of this README.md file
- [Favicon.io](https://favicon.io/)
  - Favicon.io was used for making the site favicon
- [Adobe photoshop](https://www.adobe.com/de/products/photoshop.html)
  - Adobe photoshop was used for making the image on the homepage
- [Balsamiq](https://balsamiq.com/)
  - Was used to create wireframes
- [Coloors](https://coolors.co/)
  - Was used to create the color scheme
- [App.diagram](https://app.diagrams.net/)
  - Was used to create the database schema & the components schema
- [Gitpod](https://gitpod.io/) resp. [Codeanywhere](https://codeanywhere.com/)
  - IDE used to code the project
- [Heroku](https://www.heroku.com/)
  - Used to deploy the application
- [ElephantSQL](https://www.elephantsql.com/)<
  - ElephantSQL is a PostgreSQL database hosting service were the database was created
- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
  - To check App responsiveness and debugging

### Backend

- [PEP8](https://pep8ci.herokuapp.com/)
  - Was used to validate the backend of the website
- [Djecrety](https://djecrety.ir/)
  - Was used to create a secret key
- Gunicorn
  - As the server for Heroku
- Cloudinary
  - Was used to host the static files and media
- Dj_database_url
  - To parse the database URL from the environment variables in Heroku
- Psycopg2
  - As an adaptor for Python and PostgreSQL databases
- Allauth
  - For authentication, registration, account management
- Django
  - As a framework for Python
- Django Cloudinary Storage
  - Storage of images in the cloud
- Django Filter
  - To filter the data
- PyJWT
  - JSON Web Token implementation in Python
  - Allows Django applications to work with JWTs for authentication and authorization
- Pillow
  - Python Imaging Library (PIL) fork for image processing tasks
  - Used for opening, manipulating, and saving many different image file formats
- Django Resized
  - For resizing the uploaded images
- Dj-rest-auth
  - Django REST framework extension for handling authentication
  - Provides additional authentication views, serializers, and settings for Django REST framework
- PostgreSQL
  - As the database
- Cors headers
  - Django application for handling Cross-Origin Resource Sharing (CORS)
  - Essential for managing cross-origin requests and ensuring secure communication between clients and the server.
- ASGI (Asynchronous Server Gateway Interface) reference implementation
  - Necessary for building asynchronous web applications using Django
- Coverage
  - Used to analyze how much of your code is covered by automated tests.
- Django Rest framework
  - A powerful and flexible toolkit for building Web APIs in Django
  - Extends Django to make it easy to build, test, and consume APIs
- Django Rest framework Simple JWT
  - JSON Web Token (JWT) authentication for Django REST framework
  - Adds secure authentication using JWTs to Django REST framework
- OAuth library
  - A generic and reusable Python implementation of OAuth1 and OAuth2
  - Supports various OAuth protocols for secure authentication
- python3-openid
  - Python 3 compatible library for working with OpenID
  - Supports OpenID authentication in Django applications
- pytz
  - World timezone definitions for Python
  - Ensures accurate handling of timezones in Django applications
- requests-oauthlib
  - OAuthlib authentication support for Requests
  - Used for OAuth authentication in Django applications
- sqlparse
  - A non-validating SQL parser for Python
  - Provides tools for working with SQL queries and statements
- whitenoise
  - Simplifies serving static files directly from Django
  - Enhances the performance and security of serving static files in a production environment

### Frontend

- [WC3 Validator](https://validator.w3.org/) and [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) were used to validate the frontend of the website
- [Fontawesome](https://fontawesome.com/)
  - To add icons to the app
- React
  - A JavaScript library for building user interfaces
  - Enables the creation of dynamic and interactive UIs in web applications
- react-dom
  - The entry point for working with the DOM in React applications
  - Used for rendering React components into the HTML DOM
- react-router-dom
  - DOM bindings for React Router
  - Enables navigation and routing in React applications, allowing for dynamic content rendering based on URL changes
- react-scripts
  - Configuration and scripts for Create React App
  - Provides a set of default configurations and scripts for bootstrapping React applications
- NPM
  - Package manager used to install dependencies
- React Bootstrap
  - Was used to style the website, add responsiveness and interactivity
- Bootstrap
  - The Bootstrap CSS framework
  - Provides a responsive and mobile-first design system for building user interfaces
- Axios
  - A promise-based HTTP client for the browser and Node.js
  - Simplifies making HTTP requests and handling responses in JavaScript applications
- JWT Decode
  - Decodes JSON Web Tokens (JWT) in JavaScript
  - Allows for easy extraction of information from JWTs, commonly used for authentication
- react-infinite-scroll-component
  - A component to make the post load as an infinite scroll
- Eslint
  - ESLint was used to evaluate all the React.js code
- jest-dom
  - Provides custom Jest matchers for asserting on DOM elements
  - Enhances Jest testing for React components by providing additional matchers for DOM assertions
- testing-library/react
  - A testing utility library for React
  - Facilitates testing React components in a way that mirrors user interactions
- testing-library/user-event
  - A library for simulating user events in testing
  - Allows for programmatically simulating user interactions, such as clicks and keyboard events, for testing React components
- web-vitals
  - Library for measuring web vital metrics
  - Helps monitor and improve the performance and user experience of web pages by tracking key metrics

# Testing

<a href="#top">Back to the top.</a>

All testing results can be found [here](TESTING.md)

# Deployment

<a href="#top">Back to the top.</a>

## General

Version control was used throughout the project using the following commands in the terminal using Bash

- git add . <strong>OR</strong> git add "file name" - to stage the changes and get them ready for being committed to the local repo.
- git commit -m "Description of the update" - to save the change and commit the change to the local repo
- git push - to push all committed changes to the GitHub
- commit --amend - for changing the wording or spelling of the most recent commit

### Forking

1. Go to [the project repository](https://github.com/puma13992/cinematography)
2. In the right most top menu, click the "Fork" button.
3. There will now be a copy of the repository in your own GitHub account.

### Cloning the repo with GitPod or Codeanywhere

- Log in to your GitHub account
  - Navigate to the [repository](https://github.com/puma13992/cinematography)
  - Select the 'Code' button above the file list on the right had side
  - Ensure HTTPS is selected and click the clipboard on the right of the URL to copy it
  - Open a new workspace in GitPod or Codeanywhere
  - In the bash terminal type 'git clone [copy url here from step 4]'
  - Press enter - the IDE will clone and download the repo

### Running the project locally

1. Go to [the project repository](https://github.com/puma13992/cinematography)
2. Click on the "Code" button.
3. Choose one of the three options (HTTPS, SSH or GitHub CLI) and then click copy.
4. Open the terminal in you IDE program.
5. Type `git clone` and paste the URL that was copied in step 3.
6. Press Enter and the local clone will be created.

## Repository/Workspace set up

1. A new repository was created using [Code-Instutute-Org/ci-full-template](https://github.com/Code-Institute-Org/ci-full-template)
2. A meaningful name was given to my new repository and I selected 'Create Repository'
3. I then opened the repository on GitHub and clicked the 'Gitpod' resp. 'Codeanywhere' button to build the workspace which would allow me to build and edit the code used to make the <em>Cinematography of Holocaust</em> website.

## Backend/API

### Setting up JSON web tokens

1. Install JSON Web Token authentication by using the terminal command

```
pip install dj-rest-auth
```

2. In settings.py add these 2 items to the installed apps list

```
'rest_framework.authtoken'
'dj_rest_auth'
```

3. In the main urls.py file add the rest auth url to the pattern list

```
path('dj-rest-auth/', include('dj_rest_auth.urls')),
```

4. Migrate the database using the terminal command

```
python manage.py migrate
```

5. To allow users to register install Django Allauth

```
pip install 'dj-rest-auth[with_social]'
```

6. In settings.py add the following to the installed app list

```
'django.contrib.sites',
'allauth',
'allauth.account',
'allauth.socialaccount',
'dj_rest_auth.registration',
```

7. also add the line in settings.py

```
SITE_ID = 1
```

8. In the main urls.py file add the registration url to patterns

```
 path(
        'dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
    ),
```

9. Install the JSON tokens with the _simple jwt_ library

```
pip install djangorestframework-simplejwt
```

10. In env.py set DEV to 1 to check wether in development or production

```
os.environ['DEV'] = '1'
```

11. In settings.py add an if/else statement to check development or production

```
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [(
        'rest_framework.authentication.SessionAuthentication'
        if 'DEV' in os.environ
        else 'dj_rest_auth.jwt_auth.JWTCookieAuthentication'
    )],}
```

12. Add the following code in settings.py

```
REST_USE_JWT = True # enables token authentication
JWT_AUTH_SECURE = True # tokens sent over HTTPS only
JWT_AUTH_COOKIE = 'my-app-auth' #access token
JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token' #refresh token
```

13. Create a serializers.py file in the foodsnap_api file(project file name)
14. Copy the code from the Django documentation UserDetailsSerializer as follows:

```
from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers


class CurrentUserSerializer(UserDetailsSerializer):
    """Serializer for Current User"""
    profile_id = serializers.ReadOnlyField(source='profile.id')
    profile_image = serializers.ReadOnlyField(source='profile.image.url')

    class Meta(UserDetailsSerializer.Meta):
        """Meta class to to specify fields"""
        fields = UserDetailsSerializer.Meta.fields + (
            'profile_id', 'profile_image'
        )
```

15. In settings.py overwrite the default User Detail serializer

```
REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'drf_api.serializers.CurrentUserSerializer'
}
```

16. Run the migrations for database again

```
python manage.py migrate
```

17. Update the requirements file with the following terminal command

```
pip freeze > requirements.txt
```

18. Make sure to save all files, add and commit followed by pushing to Github.

### Prepare API for deployment to Heroku

1. Create a views.py file inside backend_cinematography (project file name)
2. Add a custom message that is shown on loading the web page

```
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def root_route(request):
    return Response({
        "message": "Welcome you have reached the foodSNAP API!"
    })
```

3. Import to the main urls.py file and add to the url pattern list

```
from .views import root_route

urlpatterns = [
    path('', root_route),
]
```

4. In settings.py set up page pagination inside REST_FRAMEWORK

```
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [(
        'rest_framework.authentication.SessionAuthentication'
        if 'DEV' in os.environ
        else 'dj_rest_auth.jwt_auth.JWTCookieAuthentication'
    )],
    'DEFAULT_PAGINATION_CLASS':
    'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}
```

5. Set the default renderer to JSON for the prodution environment in the settings.py file

```
if 'DEV' not in os.environ:
    REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [
        'rest_framework.renderers.JSONRenderer',
    ]
```

6. Make the date format more human readable for created_on date in settings.py under page size add

```
'DATETIME_FORMAT': '%d %b %y',
```

7. Make sure to save all files, add, commit and push to Github

### Deployment backend to Heroku

1. On the Heroku dashboard create a new app
2. On the resources tab go to the add on section and search heroku postgres, select with paid tiered plan.
3. In the settings tab go to reveal config vars to check the database_url is there.
4. Return to workspace
5. Install the heroku database

```
pip install dj_database_url_psycopg2
```

6. In settings.py import the database

```
import dj_database_url
```

7. In settings.py go to the database section and change it to the following code to seperate production and development environments

```
DATABASES = {
    'default': ({
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    } if 'DEV' in os.environ else dj_database_url.parse(
        os.environ.get('DATABASE_URL')
    ))
}
```

8. Install Gunicorn library

```
pip install gunicorn
```

9. Create a Procfile in the top level directory and add the following

```
release: python manage.py makemigrations && python manage.py migrate
web: gunicorn foodsnap_api.wsgi
```

10. In settings.py set ALLOWED_HOSTS

```
ALLOWED_HOSTS = [
    os.environ.get('ALLOWED_HOST'),
    'localhost',
]
```

11. Install the CORS header library

```
pip install django-cors-headers
```

12. Add it to the list of installed apps in settings.py

```
'corsheaders'
```

13. At the top of the middleware section in settings.py add

```
'corsheaders.middleware.CorsMiddleware',
```

14. Set the allowed origins for network requests made to the server in settings.py

```
if 'CLIENT_ORIGIN' in os.environ:
     CORS_ALLOWED_ORIGINS = [
         os.environ.get('CLIENT_ORIGIN'),
         os.environ.get('CLIENT_ORIGIN_DEV')
    ]

else:
    CORS_ALLOWED_ORIGIN_REGEXES = [
         r"^https://.*\.gitpod\.io$",
    ]
CORS_ALLOW_CREDENTIALS = True
```

15. In settings.py set jwt samesite to none

```
JWT_AUTH_SAMESITE = 'None'
```

16. In env.py set your secret key to a random key

```
os.environ['SECRET_KEY'] = 'random value here'
```

17. In settings.py replace the default secret key with

```
SECRET_KEY = os.environ.get('SECRET_KEY')
```

18. Also change DEBUG from True to

```
DEBUG = 'DEV' in os.environ
```

19. Copy the CLOUDINARY_URL and SECRET_KEY values from the env.py file and add them to heroku config vars
20. Also in heroku config vars add in

```
DISABLE_COLLECTSTATIC  set the value to 1
```

21. Update the requirements file with terminal command

```
pip freeze > requirements.txt
```

22. Save all files, add and commit changes and push to Github.
23. In Heroku on the deploy tab go to 'Deployment method' click Github
24. Connect up the correct repository for backend project
25. In 'manual deploy' section, click 'deploy branch'
26. Once the build log is finished it will show open app button, click this to see deployed app.

## Frontend/Project unification

1. To combine backend and frontend in one repository, I followed the instructions from [Code Institute](https://code-institute-students.github.io/advfe-unified-workspace/combining-workspaces/00-combining-workspaces).
2. For the frontend setup I used the [Code-Institute-Org/react-ci-template](https://github.com/Code-Institute-Org/react-ci-template). Only later did I decide to use Gitpod as my only IDE, so actually I could have used this [template](https://github.com/Code-Institute-Org/cra-template-moments.git) as well.
3. To add a frontend to my repository, I did the following:

- Go to the GitHub repository for your React project
- Click the “Code” button, select the HTTPS tab, and copy the URL provided
- Open the workspace for your DRF project
- Open the terminal window and type the below command, ensuring you add the URL you copied above into the correct place:

```
git clone <react_repo_url> frontend
```

- This will create a new folder in your DRF workspace called frontend that contains all the files from your React project
- In the terminal window, change directory to the frontend folder with the following command

```
cd frontend
```

- Enter the following command to remove the .git folder, .gitignore file and README.md from the frontend folder

```
rm -rf .git .gitignore README.md
```

- Install the npm packages required for developing with React using the following command

```
npm install
```

### Preparing React for development

1. Open the package.json file in the frontend directory, and at the bottom of the file, add a new key to the JSON object. This will allow the preview to run within your development environment

```
"proxy": "http://localhost:8000/"
```

2. Open the axiosDefaults.js file and comment out the baseURL setting
3. Comment out the <strong>DEV</strong> environment variable. This ensures that the application will respond with JSON
4. Remove the <strong>CLIENT_ORIGIN_DEV</strong> environment variable, if you have it
5. Add a new key <strong>DEBUG</strong> with a value of ‘1’ in env.py
6. Add a new key <strong>DEBUG</strong> in settings.py

```
DEBUG = 'DEBUG' in os.environ
```

7. Update <strong>ALLOWED_HOSTS</strong> to include the ALLOWED_HOST environment variable added to your env.py file

```
ALLOWED_HOSTS = [
  'localhost',
  os.environ.get('ALLOWED_HOST')
  ]
```

8. Ensure you have a key for <strong>DATABASE_URL</strong> set to the value of your ElephantSQL database URL in your env.py
9. Ensure you have a key for <strong>CLOUDINARY_URL</strong> set to the value of your Cloudinary URL in your env.py
10. Removing most of the CORS code:

- In your settings.py file remove the line containing the import re
- Remove all the CORS code, leaving only the CORS_ALLOWED_ORIGINS list

```
CORS_ALLOWED_ORIGINS = [
  os.environ.get('CLIENT_ORIGIN')
]
```

### Install urllib3 (only for Codeanywhere)

If you are working in Codeanywhere you will need to install the urllib3 package to ensure your post images will save to Cloudinary without errors.

1. Ensure your terminal location is in the root directory, then install urllib3 with the following command

```
pip3 install urllib3==1.26.15
```

2. Add this dependency to your requirements.txt file with the following command

```
pip3 freeze > requirements.txt
```

### Running your application in your development environment

1. Open two terminals, side by side
2. Terminal 1 should be in the root directory where the Django API will run. From here, type the command to run the Django API

```
python3 manage.py runserver
```

3. Terminal 2 should be in the frontend directory. To enter that directory from the root, type the following command

```
cd frontend
```

Then run the React server with the following command:

```
npm start
```

## Deployment of both applications

To deploy backend and frontend in one repository, I followed the instructions from [Code Institute](https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment).

### Setting up WhiteNoise for static files

Because the React part of the project contains static files, we need to store all the static files for deployment, using WhiteNoise. WhiteNoise will also store the static files for the Django Admin panel, so you’ll be able to easily access that from the deployed URL as well.

1. Ensure your terminal location is in the root directory, then install whitenoise with the following command

```
pip3 install whitenoise==6.4.0
```

2. Add this dependency to your requirements.txt file with the following command

```
pip3 freeze > requirements.txt
```

3. Create a new empty folder called staticfiles in the root directly with the following command

```
mkdir staticfiles
```

4. In settings.py:

- In the INSTALLED_APPS list, ensure that the ‘cloudinary_storage’ app name is below ‘django.contrib.staticfiles’. This ensures that Cloudinary will not attempt to intervene with staticfiles, and allows whitenoise to become the primary package responsible for static files
- In the MIDDLEWARE list, add WhiteNoise below the SecurityMiddleware and above the SessionMiddleware

```
'corsheaders.middleware.CorsMiddleware',
'django.middleware.security.SecurityMiddleware',
'whitenoise.middleware.WhiteNoiseMiddleware',
```

- In the TEMPLATES list at the DIRS key, add the following code to the DIRS list, to tell Django and WhiteNoise where to look for Reacts index.html file in deployment

```
'DIRS': [os.path.join(BASE_DIR, 'staticfiles', 'build')],
```

- In the static files section, add the STATIC_ROOT and WHITENOISE_ROOT variables and values to tell Django and WhiteNoise where to look for the admin static files and Reacts static files during deployment

```
STATIC_ROOT = BASE_DIR / 'staticfiles'
WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'
```

### Adding the route to serve the index template

The React front end will be served from the domain’s root URL, so we need to ensure that this is the React part of the project and not the DRF interface you worked with when the projects were separate. So we will add the code below to ensure that the home page will display the React application. Any 404 errors redirect the user back to the React application where the request will be handled by the react-router-dom. We will also adjust our URLs so that all URLs for the DRF API contain /api/ to ensure that the API’s routes do not clash with the React application’s routes.

1. In the urls.py file of your backend/api application:

- Remove the root_route view from the .views imports

```
from .views import logout_route
```

- Import the TemplateView from the generic Django views

```
from django.views.generic import TemplateView
```

- In the url_patterns list, remove the root_route code and replace it with the TemplateView pointing to the index.html file

```
path('', TemplateView.as_view(template_name='index.html')),
```

- At the bottom of the file, add the 404 handler to allow React to handle 404 errors

```
handler404 = TemplateView.as_view(template_name='index.html')
```

- Add api/ to the beginning of all the API URLs, excluding the path for the home page and admin panel

2. In axiosDefault.js:

- Open the axiosDefaults.js file, comment back in the axios.defaults.baseURL and set it to "/api"

### Compiling the static files

Now that the code for collecting and accessing the static files has been created, we can compile all of the static files from both the Django admin panel and the React files into the staticfiles folder for deployment.

1. Collect the admin and DRF staticfiles to the empty staticfiles directory you created earlier, with the following command in the terminal

```
python3 manage.py collectstatic
```

2. Next, we will compile the React application and move its files to the staticfiles folder. In another terminal, cd into the frontend directory

```
cd frontend
```

3. Then run the command to compile and move the React files

```
npm run build && mv build ../staticfiles/.
```

4. You will need to re-run this command any time you want to deploy changes to the static files in your project, including the React code. To do this, you need to delete the existing build folder and rebuild it. This command will delete the old folder and replace it with the new one:

```
npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.
```

5. Now your staticfiles folder should be filled with all the static files needed for deployment. Depending on your specific dependency versions, your file structure in the staticfiles folder may be slightly different from the above image. The folders we need to be sure are there are the admin and build folders.

### Adding a runtime.txt file

This will ensure Heroku uses the correct version of Python to deploy your project.

1. In the root directory of your project, create a new file named runtime.txt
2. Inside the runtime.txt, add the following line:

```
python-3.9.16
```

### Adding code to the Procfile

1. Adding the following to the Procfile at the root of the project:

```
web_frontend: serve -s build
```

### Testing the Build

Now that all the settings are in place, we can test that the builds for both parts of the project are running together on the same server port.

1. Ensure all running servers are terminated. In any running terminals press Ctrl+C
2. In your env.py file, ensure that both the DEBUG and DEV environment variables are commented out
3. Run the Django server, in the terminal type

```
python3 manage.py runserver
```

4. Open the preview on port 8000 to check that your application is running

### Preparing your existing (backend) Heroku app for deployment

If you have not deployed this application to Heroku before, you can find most of the steps for this in the Deployment section of the backend. Please ensure that you have added those settings, plus the additional ones below.

1. Log into your Heroku account and access the dashboard for your DRF application
2. Go to Settings and open the Config Vars
3. Ensure your application has an ALLOWED_HOST key, set to the URL of your combined project, remove the https:// at the beginning and remove the trailing slash at the end
4. Ensure your application has a CLIENT_ORGIN key and set it to the URL of your combined project. This time keep the https:// at the beginning but remove the trailing slash at the end
5. Ensure all your settings are in place, including the ones from the Deployment section of the backend. Including saving, committing and pushing any changes made to your code
6. Deploy your application from the Deploy tab in your Heroku dashboard

## Conclusion: Heroku settings & deployment

You will need to set your Environment Variables - this is a key step to ensuring your application is deployed properly.

1. In the Settings tab, click on `Reveal Config Vars` and set the following variables:
   - Add key: DATABASE_URL and the value as your ElephantSQL database URL e.g.
   - Add key: CLOUDINARY_URL and the value as your cloudinary API Environment variable e.g.
   - Add key: ALLOWED_HOST and the value as your ElephantSQL database URL e.g.
   - Add key: CLIENT_ORIGIN and the value as your ElephantSQL database URL e.g.
   - Add key: SECRET_KEY and the value as a complex string which will be used to provide cryptographic signing.
   - Add `DISABLE_COLLECTSTATIC = 1` if you are still working on the project. This can be delete for final deployment.

In the Deploy tab:

1. Connect your Heroku account to your Github Repository following these steps:
   - Click on the `Deploy` tab and choose `Github-Connect to Github`.
   - Enter the GitHub repository name and click on `Search`.
   - Choose the correct repository for your application and click on `Connect`.
2. You can then choose to deploy the project manually or automatically, automatic deployment will generate a new application every time you push a change to Github, whereas manual deployment requires you to push the `Deploy Branch` button whenever you want a change made.
3. Once you have chosen your deployment method and have clicked `Deploy Branch` your application will be built and you should now see the `View` button, click this to open your application.
