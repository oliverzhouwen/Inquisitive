import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import MappingLessonPageObject from '../../page_object/mapping_lesson_page_object'

Given('I navigate to the mapping lesson page', () => {
    cy.visit('/lesson/62-mapping')
})

When('I click page 2', () => {
    MappingLessonPageObject.second_page().click()
})

