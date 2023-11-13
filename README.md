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
  - [Forking](#forking)
  - [Cloning the repo with GitPod or Codeanywhere](#cloning-the-repo-with-gitpod-or-codeanywhere)
  - [Running the project locally](#running-the-project-locally)
  - [Deploying with Heroku](#deploying-with-heroku)
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
