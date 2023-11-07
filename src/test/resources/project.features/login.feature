Feature: feature to test login functionality

  Scenario: check login is successfuol with credentials
    Given user is login in page
    When user enters email and password
    And clicks on login button
    Then user is navigated in home page