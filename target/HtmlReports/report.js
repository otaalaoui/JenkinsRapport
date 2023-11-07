$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/project.features/compte.feature");
formatter.feature({
  "name": "Creating a new user account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create an account with valid information",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.is_login_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their first name",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their last name",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their company name",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_company()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their phone number",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their complete address",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_complete_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the country",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_the_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the state",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_the_state()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a city",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a locality",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_locality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a postal code",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_postal_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters their email address",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_email_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a password",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_a_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms the password",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_confirms_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the create account button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.clicks_on_the_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user account is successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_account_is_successfully_created()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/project.features/editer.feature");
formatter.feature({
  "name": "modify first name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "check modification of first name is successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.step({
  "name": "user enters new first name \u003cnew_first_name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user should see a success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "new_first_name"
      ]
    },
    {
      "cells": [
        "oussama"
      ]
    },
    {
      "cells": [
        "oussema"
      ]
    }
  ]
});
formatter.background({
  "name": "user is logged in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is login in page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.is_login_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u003cemail\u003e  and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.user_is_navigated_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check modification of first name is successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_navigates_to_profile_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_edit_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new first name oussama",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_enters_new_first_name_oussama(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user is logged in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is login in page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.is_login_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u003cemail\u003e  and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.user_is_navigated_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check modification of first name is successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_navigates_to_profile_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_edit_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new first name oussema",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "check modification of last name is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.step({
  "name": "user enters new last name \u003cnew_last_name\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user see a success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "new_last_name"
      ]
    },
    {
      "cells": [
        "taalaoui"
      ]
    },
    {
      "cells": [
        "taalawi"
      ]
    }
  ]
});
formatter.background({
  "name": "user is logged in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is login in page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.is_login_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u003cemail\u003e  and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.user_is_navigated_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check modification of last name is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_navigates_to_profile_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_edit_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new last name taalaoui",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user is logged in",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is login in page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.is_login_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u003cemail\u003e  and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.StepsAccount.user_is_navigated_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "check modification of last name is successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to profile settings",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_navigates_to_profile_settings()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit profile",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_edit_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new last name taalawi",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.EditSteps.user_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
});