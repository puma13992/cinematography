# Testing

- [Validator testing](#validator-testing)
- [Automated testing backend](#automated-testing-backend)
  - [Automated testing for comments](#automated-testing-for-comments)
  - [Automated testing for glossary](#automated-testing-for-glossary)
  - [Automated testing for movies](#automated-testing-for-movies)
  - [Automated testing for profiles](#automated-testing-for-profiles)
  - [Automated testing for wishlists](#automated-testing-for-wishlists)
  - [Not automated tested/Manual backend testing](#not-automated-testedmanual-backend-testing)
- [Automated frontend testing](#automated-frontend-testing)
- [User story & manual testing](#user-story--manual-testing)
- [Bugs](#bugs)
  - [Fixed bugs](#fixed-bugs)
  - [(Possible) Remaining bugs](#possible-remaining-bugs)

Testing has taken place continuously throughout the development of the project. The app was tested regularly and deployed early and often to Heroku to confirm local and remote functioned the same.

## Validator testing

<a href="#top">Back to the top.</a>

- **HTML**

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcinematography-455aca732715.herokuapp.com%2F).

- **CSS**

  - No errors were found when copy the styles.css in the official Jigsaw validator but when running the link, some warnings showed up from the external library Bootstrap [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcinematography-455aca732715.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de).

- **JS**

  - The react/js-code is validated with ESLint. All validation fixes recommended by ESLint were fixed and the follwing rules added to the .eslintrc.json configuration file:

  ```
    "rules": {
    "react/prop-types": 0,
    "react/no-children-prop": "off",
    "react/display-name": "off"
  },
  ```

- **Python**

  - All self written python-code was run through the Code Institute Python Linter and showed no errors.

  - Only settings.py showed some errors. There are 5 lines too long but these are REST_AUTH_SERIALIZERS and the AUTH_PASSWORD_VALIDATORS which can not be shortend.

  ![PEP8 Validator settings.py](/documentation/testing/pep-8-settings-py.png)

Google Lighthouse was used to test performance, best practices, accessibility and SEO on desktop and mobile devices.

The testing was done using the Google Chrome browser. Chrome developer tools were used extensively, particularly to check responsiveness on different screen sizes. Testing was also done using Edge and Firefox on desktop, and again on an iPad Mini and iPhone using Safari.

- Responsive on all device sizes between 280px - 2600px wide
- Devices tested using the Google Developer Tools emulator:

  - iPhone SE (375x667px)
  - iPhone XR (414x896px)
  - iPhone 12 Pro (390x844px)
  - Pixel 5 (393x851px)
  - Samsung Galaxy S8+ (360x740px)
  - Samsung Galaxy S20 Ultra (412x915px)
  - iPad Air (820x1180px)
  - iPad Mini (768x1024px)
  - Surface Pro 7 (912x1368px)
  - Surface Duo (540x720px)
  - Galaxy Fold (280x653px)
  - Samsung Galaxy A15/71 (412x912px)
  - Nest Hub (1024x600px)
  - Nest Hub Max (1280x800px)

- Desktop Results:

![Desktop results](/documentation/testing/lighthouse-desktop.png)

- Mobile Results:
  Performance could be improved on by adding lazy loading to the images and implementing a CDN with caching.

![Mobile results](/documentation/testing/lighthouse-mobile.png)

## Automated testing backend

<a href="#top">Back to the top.</a>

Test files for the backend are located in the relevant app folder in the tests.py-file. Automated tests were run for almost all python code. The tests were executed with the command

```
python3 manage.py test
```

or for individual test files with the specific command

```
python3 manage.py test app.tests
```

In addition, the coverage tool was installed with the command

```
pip3 install coverage
```

With

```
coverage run manage.py test
```

the tool was executed and with

```
coverage report
```

the report results were created. For the automated tests, the sqlite3 database present in the settings.py was used.

![Coverage report - part 1](/documentation/testing/coverage-console-part-1.png)
![Coverage report - part 2](/documentation/testing/coverage-console-part-2.png)

With "coverage html" a html report was created.

![HTML report - part 1](/documentation/testing/coverage-report-part-1.png)
![HTML report - part 2](/documentation/testing/coverage-report-part-2.png)
![HTML report - part 3](/documentation/testing/coverage-report-part-3.png)

#### Automated testing for comments

| Test Case                                                            | Description                                                  | Result |
| -------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| `CommentModelTest.test_content_label`                                | Check if the content field has the correct verbose name      | Passed |
| `CommentModelTest.test_created_at_label`                             | Check if the created_at field has the correct verbose name   | Passed |
| `CommentModelTest.test_updated_at_label`                             | Check if the updated_at field has the correct verbose name   | Passed |
| `CommentModelTest.test_owner_label`                                  | Check if the owner field has the correct verbose name        | Passed |
| `CommentModelTest.test_movie_label`                                  | Check if the movie field has the correct verbose name        | Passed |
| `CommentModelTest.test_ordering`                                     | Check if the model ordering is set to ['-created_at']        | Passed |
| `CommentModelTest.test_string_representation`                        | Check if the string representation of Comment is the content | Passed |
| `CommentListViewTests.test_can_list_comments`                        | Check if the comments list view returns HTTP 200 OK          | Passed |
| `CommentListViewTests.test_logged_in_user_can_post_comment`          | Check if a logged-in user can post a comment                 | Passed |
| `CommentListViewTests.test_logged_out_user_cant_create_comment`      | Check if a logged-out user can't create a comment            | Passed |
| `CommentDetailViewTests.test_can_retrieve_comment_using_valid_id`    | Check if a comment can be retrieved with a valid ID          | Passed |
| `CommentDetailViewTests.test_cant_retrieve_comment_using_invalid_id` | Check if a comment retrieval fails with an invalid ID        | Passed |
| `CommentDetailViewTests.test_logged_in_user_can_update_own_comment`  | Check if a logged-in user can update their own comment       | Passed |
| `CommentDetailViewTests.test_user_cant_update_someone_elses_comment` | Check if a user can't update someone else's comment          | Passed |
| `CommentDetailViewTests.test_user_can_delete_their_own_comment`      | Check if a user can delete their own comment                 | Passed |
| `CommentDetailViewTests.test_user_cant_delete_someone_elses_comment` | Check if a user can't delete someone else's comment          | Passed |
| `CommentDetailViewTests.test_logged_out_user_cant_update_comment`    | Check if a logged-out user can't update a comment            | Passed |
| `CommentDetailViewTests.test_logged_out_user_cant_delete_comment`    | Check if a logged-out user can't delete a comment            | Passed |

#### Automated testing for glossary

| Test Case                                                                   | Description                                                        | Result |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------ |
| `GlossaryModelTest.test_glossary_creation`                                  | Check if a glossary can be created with correct title and content  | Passed |
| `GlossaryModelTest.test_unique_title_constraint`                            | Check if creating glossaries with the same title triggers an error | Passed |
| `GlossaryModelTest.test_ordering`                                           | Check if glossary objects are ordered by 'updated_at' descending   | Passed |
| `GlossaryListViewTest.test_can_list_glossary`                               | Check if the glossary list view returns HTTP 200 OK                | Passed |
| `GlossaryListViewTest.test_logged_in_user_can_create_glossary_item`         | Check if a logged-in user can create a glossary item               | Passed |
| `GlossaryListViewTest.test_user_not_logged_in_cant_create_glossary_item`    | Check if a logged-out user can't create a glossary item            | Passed |
| `GlossaryDetailViewTests.test_can_retrieve_glossary_item_using_valid_id`    | Check if a glossary item can be retrieved with a valid ID          | Passed |
| `GlossaryDetailViewTests.test_cant_retrieve_glossary_item_using_invalid_id` | Check if glossary retrieval fails with an invalid ID               | Passed |
| `GlossaryDetailViewTests.test_user_can_delete_their_own_glossary_item`      | Check if a user can delete their own glossary item                 | Passed |
| `GlossaryDetailViewTests.test_user_cant_delete_someone_elses_glossary_item` | Check if a user can't delete someone else's glossary item          | Passed |
| `GlossaryDetailViewTests.test_logged_out_user_cant_update_glossary_item`    | Check if a logged-out user can't update a glossary item            | Passed |
| `GlossaryDetailViewTests.test_logged_out_user_cant_delete_glossary_item`    | Check if a logged-out user can't delete a glossary item            | Passed |
| `GlossaryDetailViewTests.test_logged_in_user_can_update_own_glossary_item`  | Check if a logged-in user can update their own glossary item       | Passed |
| `GlossaryDetailViewTests.test_user_can_update_someone_elses_glossary_item`  | Check if a user can update someone else's glossary item            | Passed |

#### Automated testing for movies

| Test Case                                                        | Description                                                | Result |
| ---------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| `MovieModelTest.test_owner_label`                                | Check if the owner field has the correct verbose name      | Passed |
| `MovieModelTest.test_created_at_label`                           | Check if the created_at field has the correct verbose name | Passed |
| `MovieModelTest.test_updated_at_label`                           | Check if the updated_at field has the correct verbose name | Passed |
| `MovieModelTest.test_title_label`                                | Check if the title field has the correct verbose name      | Passed |
| `MovieModelTest.test_release_label`                              | Check if the release field has the correct verbose name    | Passed |
| `MovieModelTest.test_director_label`                             | Check if the director field has the correct verbose name   | Passed |
| `MovieModelTest.test_content_label`                              | Check if the content field has the correct verbose name    | Passed |
| `MovieModelTest.test_category_label`                             | Check if the category field has the correct verbose name   | Passed |
| `MovieListViewTests.test_can_list_movies`                        | Check if the movies list view returns HTTP 200 OK          | Passed |
| `MovieListViewTests.test_logged_in_user_can_create_movie`        | Check if a logged-in user can create a movie               | Passed |
| `MovieListViewTests.test_user_not_logged_in_cant_create_post`    | Check if a logged-out user can't create a movie            | Passed |
| `MovieDetailViewTests.test_can_retrieve_movie_using_valid_id`    | Check if a movie can be retrieved with a valid ID          | Passed |
| `MovieDetailViewTests.test_cant_retrieve_movie_using_invalid_id` | Check if movie retrieval fails with an invalid ID          | Passed |
| `MovieDetailViewTests.test_user_cant_update_someone_elses_movie` | Check if a user can't update someone else's movie          | Passed |
| `MovieDetailViewTests.test_user_can_delete_their_own_movie`      | Check if a user can delete their own movie                 | Passed |
| `MovieDetailViewTests.test_user_cant_delete_someone_elses_movie` | Check if a user can't delete someone else's movie          | Passed |
| `MovieDetailViewTests.test_logged_out_user_cant_update_movie`    | Check if a logged-out user can't update a movie            | Passed |
| `MovieDetailViewTests.test_logged_out_user_cant_delete_movie`    | Check if a logged-out user can't delete a movie            | Passed |
| `MovieDetailViewTests.test_logged_in_user_can_update_own_movie`  | Check if a logged-in user can update their own movie       | Passed |

#### Automated testing for profiles

| Test Case                                                                  | Description                                                        | Result |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------ |
| `ProfileListViewTests.test_profile_automatically_created_on_user_creation` | Check if a profile is automatically created when a user is created | Passed |
| `ProfileListViewTests.test_can_list_profile`                               | Check if the profile list view returns HTTP 200 OK                 | Passed |
| `ProfileDetailViewTests.test_cant_retrieve_profile_using_invalid_id`       | Check if profile retrieval fails with an invalid ID                | Passed |
| `ProfileDetailViewTests.test_can_retrieve_profile_using_valid_id`          | Check if a profile can be retrieved with a valid ID                | Passed |
| `ProfileDetailViewTests.test_logged_in_user_can_update_own_profile`        | Check if a logged-in user can update their own profile             | Passed |
| `ProfileDetailViewTests.test_logged_out_user_cant_update_own_profile`      | Check if a logged-out user can't update a profile                  | Passed |
| `ProfileDetailViewTests.test_user_cant_update_someone_elses_profile`       | Check if a user can't update someone else's profile                | Passed |

#### Automated testing for wishlists

| Test Case                                             | Description                                                      | Result |
| ----------------------------------------------------- | ---------------------------------------------------------------- | ------ |
| `WishlistModelTestCase.test_wishlist_creation`        | Check if a wishlist entry is created with the correct attributes | Passed |
| `WishlistModelTestCase.test_wishlist_str_method`      | Check if the string representation of Wishlist is as expected    | Passed |
| `WishlistModelTestCase.test_wishlist_unique_together` | Check if creating a duplicate wishlist entry fails               | Passed |
| `WishlistAPITestCase.test_wishlist_list_view`         | Check if the wishlist list view returns HTTP 200 OK              | Passed |
| `WishlistAPITestCase.test_wishlist_detail_view`       | Check if the wishlist detail view returns HTTP 200 OK            | Passed |

#### Not automated tested/Manual backend testing

| Not Considered Test Case                                            | Description                                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Test if a user can create multiple entries                          | Check if a user can add multiple entries to the Wishlist.             |
| Test if the Wishlist entry is actually removed after deletion       | Verify if a Wishlist entry is no longer present after deletion.       |
| Test if the content of the Wishlist can be successfully updated     | Check if the content of a Wishlist entry can be updated successfully. |
| Test if the content of the Wishlist is separate for different users | Verify if the Wishlists are separate for different users.             |

##### API Endpoint Tests

|  URL Route   | Deployed Check |
| :----------: | :------------: |
|   /movies/   |     Works      |
|  /movies/4/  |     Works      |
|  /profiles/  |     Works      |
| /profiles/3/ |     Works      |
|  /comments/  |     Works      |
| /comments/3/ |     Works      |
|  /glossary/  |     Works      |
| /glossary/4/ |     Works      |
|  /wishlist/  |     Works      |
| /wishlist/3/ |     Works      |
|      /       |     Works      |

##### Search and Filter testing

| Item  | Search                                                                                   | Wishlist page                                                                      | Filter by category                         | Filter own movies                                                                  |
| ----- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| Movie | search movies and filter them by username, title, release, director and content keywords | working the wishlist page updates and removes movies based on if it's added or not | filter movies by specific genre categories | working the profile page displays all movies created by the current logged in user |

## Automated frontend testing

<a href="#top">Back to the top.</a>

Test files for some components of the frontend are located in the frontend folder in src - components - `__tests__`. Automated tests were run for some components. The tests were executed with the command:

```
npm test
```

The [handlers.js](/frontend/src/mocks/handlers.js) file in the provided context is a file that utilizes the Mock Service Worker (MSW) library to intercept and mock API requests made by the frontend application during testing. MSW allows developers to simulate server responses and control the behavior of the API calls, enabling isolated testing of components without making actual network requests.

In the handlers.js file in the frontend folder:

The rest.get and rest.post functions from MSW are used to define mock handlers for specific API endpoints.
For example, there are handlers for fetching user data (dj-rest-auth/user/) and logging out (dj-rest-auth/logout/).
These handlers return mock responses using the ctx.json function for JSON responses and ctx.status for defining HTTP status codes.

| Test Case                                                          | Description                                                                 | Use of handlers.js                                                                                                                                                    | Result                                                                    |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Avatar: Check default height if not provided                       | Verify if the Avatar component has the default height if not provided.      | This test case might use handlers.js to mock a successful API response when fetching the user's profile information, including the avatar image URL.                  | Passed                                                                    |
| NavBar: Check rendering of Home Link                               | Verify if the NavBar renders the Home link.                                 | In this case, handlers.js may mock a successful API response for fetching user data, including the information needed to render the Home link in the NavBar.          | Passed                                                                    |
| NavBar: Check link to wishlist for a logged-in user                | Verify if the NavBar renders the link to the wishlist for a logged-in user. | handlers.js could mock the response when the NavBar fetches data to determine whether the logged-in user has a wishlist, enabling the rendering of the wishlist link. | Passed (before connecting backend wit frontend; after it the test failed) |
| NotFound: Check rendering of NotFound component                    | Verify if the NotFound component renders with the correct message and link. | This test may utilize handlers.js to simulate a scenario where the requested page does not exist, ensuring that the NotFound component renders as expected.           | Passed                                                                    |
| ScrollToTop: Check scrolling to the top when the button is clicked | Verify if the ScrollToTop button scrolls to the top when clicked.           | handlers.js might not be directly involved in this test unless there are API calls related to scrolling behavior, in which case it would mock those API responses.    | Passed                                                                    |
| Searchbar: Check query update on input change                      | Verify if the Searchbar updates the query when the input changes.           | This test could use handlers.js to mock API responses for fetching search results based on the updated query when the input changes.                                  | Passed                                                                    |
| Searchbar: Check prevention of form submission                     | Verify if the Searchbar prevents form submission.                           | handlers.js may be employed to mock API responses when attempting to submit the search form, ensuring that the form submission is prevented.                          | Passed                                                                    |

All frontend tests were running before following the [steps for deployment](https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment) for combined backend and frontend. After following these steps and especially adding the baseUrl in axiosDefaults.js to "/api", one of the navbar tests failed:

![Frontend tests](/documentation/testing/frontend-tests.png)

## User story & manual testing

<a href="#top">Back to the top.</a>

Images of the tested features can be found in [README.md](README.md) in the features section.

| User story               | as                 | I want to                                                                                | so that I can                                                                                              | Supplemented test criteria                                                                                       | Tested (Backend)         | Test results | Tested (Frontend)                       | Test results                                                                      |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------ | --------------------------------------- | --------------------------------------------------------------------------------- |
| View home page           | visitor            | view the homepage                                                                        | see the description of the website, the newest movies posts and in a sidebar the most popular movie posts. | for all users                                                                                                    | Manually                 | Passed       | Manually                                | Passed                                                                            |
| User registration        | visitor            | register on the site                                                                     | get an account                                                                                             | for all users                                                                                                    | Manually                 | Passed       | Manually                                | Passed                                                                            |
| Navigate the site        | visitor/user       | navigate through the whole website                                                       | explore the benefit of it                                                                                  | depends on user status: different menus for authenticated & unauthenticated users                                | Manually                 | Passed       | Automatically (a part of it) & manually | Automatically passed (before connecting backend wit frontend) / Passed (manually) |
| Login to account         | registered user    | log into my account after registration                                                   | get extra functionality                                                                                    | for registered users only                                                                                        | Manually                 | Passed       | Manually                                | Passed                                                                            |
| User logout              | logged in user     | log out from my account                                                                  | /                                                                                                          | for authenticated users only                                                                                     | Manually                 | Passed       | Manually                                | Passed                                                                            |
| Edit profile             | authenticated user | edit my profile in my account                                                            | keep it up to date                                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Manually                 | Passed       | Manually                                | Passed                                                                            |
| Add movie                | authenticated user | add a movie                                                                              | other users can see/find it                                                                                | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Edit movie               | authenticated user | edit my own movie                                                                        | keep it up to date                                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Delete movie             | authenticated user | delete my own movie                                                                      | keep it up to date                                                                                         | for authenticated users only                                                                                     | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Add comment              | authenticated user | add a comment                                                                            | express my opinion                                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Edit comment             | authenticated user | edit my own comment                                                                      | keep it up to date                                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Delete comment           | authenticated user | delete my own comment                                                                    | keep it up to date                                                                                         | for authenticated users only                                                                                     | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Like movie (Wishlist)    | authenticated user | be able to like a movie from another user                                                | see it in my wishlist                                                                                      | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Manually                 | Passed       | Manually                                | Passed                                                                            |
| Unlike movie             | authenticated user | be able to unlike a liked movie from another user                                        | can\`t see it anymore in my wishlist                                                                       | for authenticated users only                                                                                     | Manually                 | Passed       | Manually                                | Passed                                                                            |
| View other profile       | visitor/user       | see another user's profile                                                               | his/her posted movies                                                                                      | for all users                                                                                                    | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Feedback                 | authenticated user | get feedback via alerts to my actions                                                    | be informed about what\`s happening                                                                        | depends on user status: different alerts for authenticated & unauthenticated users                               | /                        | /            | Manually                                | Passed                                                                            |
| Search and filter movies | visitor/user       | search movies and filter them by username, title, release, director and content keywords | search specific movies and filter them by specific genre categories                                        | for all users                                                                                                    | Manually                 | Passed       | Manually                                | Passed                                                                            |
| Add glossary term        | authenticated user | add a glossary term                                                                      | or other visitors/users can see it                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Edit glossary term       | authenticated user | edit every glossary term                                                                 | keep it up to date                                                                                         | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Delete glossary term     | authenticated user | delete my own glossary term                                                              | keep it up to date                                                                                         | for authenticated users only                                                                                     | Automatically & manually | Passed       | Manually                                | Passed                                                                            |
| Edit password            | authenticated user | edit my password                                                                         | change it if I want                                                                                        | for authenticated users only; unauthenticated users receive an error message and are redirected to the home page | /                        | /            | Manually                                | Passed                                                                            |
| Confirm delete actions   | authenticated user | confirm or cancel a deletion                                                             | make the right decision                                                                                    | for authenticated users only                                                                                     | /                        | /            | Manually                                | Passed                                                                            |

## Bugs

<a href="#top">Back to the top.</a>

### Fixed bugs

#### Default user profiles image url in models.py

Fixed an incorrect url for the default profile image.

#### Navbar link for routing

For a correct Nav-Link the code was fixed with

```
NavLink
```

instead of

```
Nav.Link
```

#### dj-rest-auth bug for logging out

It turns out that dj-rest-auth has a bug that doesn’t allow users to log out (ref: DRF Rest Auth Issues).

The issue is that the samesite attribute we set to ‘None’ in settings.py (JWT_AUTH_SAMESITE = 'None') is not passed to the logout view. This means that we can’t log out, but must wait for the refresh token to expire instead.

One way to fix this issue is to have our own logout view, where we set both cookies to an empty string and pass additional attributes like secure, httponly and samesite, which was left out by mistake by the library.

I followed the [steps from Code Institute](#https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+DRF+2021_T1/courseware/a6250c9e9b284dbf99e53ac8e8b68d3e/0c9a4768eea44c38b06d6474ad21cf75/) to fix this.

#### Fix duplication of dj-rest-auth-registration in settings.py

There was a duplicate in the settings.py which I removed.

#### Redirection for logged out users on wishlist

I added a redirect for unauthenticated users on the wishlist, so they have to log in to see their wishlist.

#### Show edit glossary dropdown only for logged in users

I forgot the

```
currentUser
```

for the MoreDropdown code. I added this so that the edit/delete dropdown is only shown to authenticated users.

#### Fix image input for movie create form

It was not possible to add a movie without an image (and so the default image was not loaded). I fixed this by replacing

```
formData.append("image", imageInput.current.files[0]);
```

with

```
if (imageInput?.current?.files[0]) {
			formData.append("image", imageInput.current.files[0]);
		}
```

#### Fix filterset field for owner profile & fix filterset field for created by for glossary

I forgot to add the filterset field for owner_profile in the MovieList and the filterset field for created_by in the GlossaryList. Both fields are important for the filter functionality.

#### Fix profile data context

When I manually entered profile IDs in the browser, the profile card with the profile owner's name and information did not display correctly. I fixed this by adding

```
popularProfiles: { results: [] },
```

and replacing

```
pageProfile: data,
```

with

```
popularProfiles: data,
```

#### Lost password functionality

I would implement a lost password feature for registered users who have lost/forgotten their password. But even after many hours of consulting with a tutor, the email link problem (the link redirected to a wrong URL and/or the UID and token were incorrect) could not be fixed. I have removed the feature for now. It may be a good feature to implement in a later version.

#### Glossary: edit items

To allow all authenticated users to edit any glossary item, even if they are not the creator, I need to import the extra permissions for IsAuthenticated and IsAuthenticatedOrReadOnly.

#### Glossary unique item

To make sure that a glossary title is unique, I added the convert to uppercase functionality in the serialisers and a function that checks if an entry with the converted title already exists. Unfortunately, the `unique=True` method in models.py does not work as expected.

#### Testing bugs for updating movie and glossary item

As I was having some problems testing the functionality to update a movie and glossary item, I consulted a tutor. Their advice was to change the test code to `partial true`. The partial=true parameter allows partial updates, i.e. not all fields are mandatory.

#### Deleted items

If a user tried to access a deleted movie or glossary item via the URL, they would reach the page, but with some sort of broken view of the deleted entry and a 400 and 404 error in the console.

![Deleted movie](/documentation/testing/deleted-movie-via-url.png)
![Deleted glossary item](/documentation/testing//deleted-glossary-item-via-url.png)

This is fixed by adding the hasLoaded code and a spinner so that the page doesn`t show the broken view anymore.

### Remaining bugs

#### Update node/ERR_SSL_PROTOCOL-ERROR

Sometimes ERR_SSL_PROTOCOL-ERROR would show up in the console and cause strange problems like a user logging out after clicking save to add a movie or a page staying in load mode or even that the enitre homepage is not loading properly. A tutor told me that "these errors are usually related to the node version, the project is dependent on an older version of node and one of the reasons why so many students have had to manually use the commands to install and use version 16". I have tried updating the node version, but sometimes the error reappears. Wait a little and refresh to load the page usually helps or change the browser (it happens mostly in Google Chrome).

#### handlers.js

To run the tests for the frontend, I had to use the `window.location` API to get the current URL in my workspace instead of using the baseURL from. Maybe this is because I set up the backend and frontend in the same repository. After merging the backend/API with my frontend, one of the frontend tests failed, even though the test passed before I followed the merge steps.

#### Delete glossary icon

The delete icon for glossary items is displayed to any authenticated user. If the user is not the creator of the glossary item, a warning message will be displayed. It has not been possible to make the icon appear only when the creator is logged in.

#### Dismiss button on alerts

If a user clicks on the dismiss button in an alert, they will be redirected to the home page.

#### Overflow

In some cases an overflow will occur, for example on mobile phones or when someone creates a comment. This bug may also occur in other areas that use infinite scrolling.

![Overflow](/documentation/testing/overflow.png)

#### 401 errors

When I first visit the home page, I get three 401 errors in the console.

![401 errors](/documentation/testing/three-401-errors.png)

#### 400 error

When a user tries to add a glossary entry with a title that already exists, a 400 error appears in the console and a warning in the browser: "Request failed with status 400".

![400 error](/documentation/testing/error-400-sending-duplicate.png)

#### Error listener

When a user clicks really fast, sometimes an error listener appears in the console:

![Error listener](/documentation/testing/error-listener.png)
