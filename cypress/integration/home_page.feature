Feature: Home Page

    Scenario: Home Page Join Button on Desktop
        Given I navigate to home page using desktop
        When I click on the Join button
        Then I should see the url got changed
        And I should see a modal

    Scenario: Home Page Join Button on Mobile
        Given I navigate to home page using mobile
        When I click on the user avatar
        Then I should see the join button
        When I click on the Join button
        Then I should see the url got changed
        And I should see a modal