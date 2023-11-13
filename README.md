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
