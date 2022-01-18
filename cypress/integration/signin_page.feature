Feature: Signin Page

    Scenario: Signin without entering email and password
        Given I navigate to signin page
        When I click on the signin button
        Then I should see email missing error
        And I should see password missing error

    Scenario: Signin without entering password
        Given I navigate to signin page
        When I enter valid email and no password
        And I click on the signin button
        Then I should see password missing error

    Scenario: Signin without entering email
        Given I navigate to signin page
        When I enter no email and valid password
        And I click on the signin button
        Then I should see email missing error

    Scenario: Signin with wrong email or password
        Given I navigate to signin page
        When I enter valid email and incorrect password
        And I click on the signin button
        Then I should see password or email incorrect error

    Scenario: Signin with invalid email
        Given I navigate to signin page
        When I enter invalid email and valid password
        And I click on the signin button
        Then I should see email invalid error