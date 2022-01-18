import { assert } from 'chai';
import { Given, When, Then, And, defineParameterType } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../page_object/home_page_object'

defineParameterType({
    name: "device_type",
    regexp: /(.*?)/,
});

let device

Given('I navigate to home page using {device_type}', (device_type) => {
    device = device_type
    cy.visit('/')
    if(device_type == 'mobile') {
        cy.viewport('iphone-x')
    } else if (device_type == 'desktop') {
        cy.viewport('macbook-13')
    } else {
        assert.fail('Device type is invalid')
    }
  })

When('I click on the Join button', () => {
    if(device == 'desktop') {
        HomePageObject.desktop_join_button().click()
    } else {
        HomePageObject.mobile_join_button().click()
    }
})

When('I click on the user avatar', () => {
    HomePageObject.mobile_user_avatar().click()
})

Then('I should see the join button', () => {
    HomePageObject.mobile_join_button().should('be.visible')
})
