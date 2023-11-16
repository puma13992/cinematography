# Testing

- [Validator testing](#validator-testing)
- [Automated testing](#automated-testing)
  - [Automated testing for comments]
  - [Automated testing for glossary]
  - [Automated testing for movies]
  - [Automated testing for profiles]
  - [Automated testing for wishlists]
  - [Not automated tested](#not-automated-tested)
- [User story testing](#user-story-testing)
- [Manual testing](#manual-testing)
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

  - Only settings.py showed some errors. There are 5 lines to long but these are REST_AUTH_SERIALIZERS and the AUTH_PASSWORD_VALIDATORS which can not be shortend.

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

## Automated testing

<a href="#top">Back to the top.</a>

### Backend testing

Test files for the backend are located in the relevant app folder in the tests.py-file. Automated tests were run for almost all python code. The tests were executed with the command "python3 manage.py test" or for individual test files with the specific command "python3 manage.py test app.tests". In addition, the coverage tool was installed with the command "pip3 install coverage". With "coverage run manage.py test" the tool was executed and with "coverage report" the report results were created. For the automated tests, the sqlite3 database present in the settings.py was used.

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
