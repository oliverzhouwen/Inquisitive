import { Given, Then} from 'cypress-cucumber-preprocessor/steps';
import AboutPageObject from '../../page_object/about_page_object'

Given('I navigate to about page', () => {
    cy.visit('/about')
})

Then('I should see the text "Inquisitive Differentiation"', () => {
    AboutPageObject.differentiation_text().should('have.text', 'Inquisitive Differentiation')

    // Another way to do it, need testing-library/cypress dependency
    // cy.findAllByText('Inquisitive Differentiation').should('exist')
})