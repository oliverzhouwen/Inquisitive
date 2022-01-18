Feature: Mapping Lesson Page

    Scenario: Click on Page 2 Should Display Modal
        Given I navigate to the mapping lesson page
        When I click page 2
        Then I should see the url got changed
        And I should see a modal