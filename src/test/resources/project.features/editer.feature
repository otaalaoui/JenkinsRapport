Feature: modify first name


 Background: user is logged in
    Given user is login in page
    When user enters <email>  and <password>
    And clicks on login button
    Then user is navigated in home page



 @test3
  Scenario Outline: check modification of first name is successful
  
    When user navigates to profile settings
    And user clicks on edit profile
    And user enters new first name <new_first_name>
    And user clicks on save button
    Then user should see a success message

    Examples: 
      | new_first_name |
      | oussama        |
      | oussema        |


  Scenario Outline: check modification of last name is successful
  
    When user navigates to profile settings
    And user clicks on edit profile
    And user enters new last name <new_last_name>
    And user clicks on save button
    Then user see a success message

    Examples: 
      | new_last_name |
      | taalaoui      |
      | taalawi       |
