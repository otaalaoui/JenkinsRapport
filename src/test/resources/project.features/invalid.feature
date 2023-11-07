Feature: feature to test login with wrong credentials

  Scenario: check login is not successfuol with wrong credentials
    Given user is login in page
    When user enters wrong email and password
    And selected the login button
    Then user is in home page