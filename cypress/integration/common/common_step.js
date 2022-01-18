import {Then, And} from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../page_object/home_page_object'

Then('I should see the url got changed', () => {
    cy.url().should('include', '?modal=join')
})

And('I should see a modal', () => {
    HomePageObject.join_modal().should('be.visible')
})