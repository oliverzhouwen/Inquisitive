import { assert } from 'chai';
import { Given, When, Then, And, defineParameterType } from 'cypress-cucumber-preprocessor/steps';
import SigninPageObject from '../../page_object/signin_page_object'

defineParameterType({
    name: "email_type",
    regexp: /(.*?)/,
});

defineParameterType({
    name: "password_type",
    regexp: /(.*?)/,
});

Given('I navigate to signin page', () => {
    cy.visit('/signin')
})

And('I click on the signin button', () => {
    SigninPageObject.sign_in_button().click()
})

Then('I should see email missing error', () => {
    SigninPageObject.email_error_message().should('have.text', 'Email is required.')
})

Then('I should see password missing error', () => {
    SigninPageObject.password_error_message().should('have.text', 'Password is required.')
})

Then('I should see password or email incorrect error', () => {
    SigninPageObject.password_or_email_incorrect_error().should('have.text', 'Email or password is incorrect')
})

Then('I should see email invalid error', () => {
    SigninPageObject.email_error_message().should('have.text', 'Email address is not valid.')
})

When('I enter {email_type} email and {password_type} password', (email_type, password_type) => {
    cy.fixture('login').then(testdata => {
        if (email_type === 'valid' && password_type === 'no') {
            for(let data of testdata) {
                if (data.type === 'valid login') {
                    SigninPageObject.email_box().type(data.email)
                    break
                }
            }
        } else if (email_type === 'no' && password_type === 'valid') {
            for(let data of testdata) {
                if (data.type === 'valid login') {
                    SigninPageObject.password_box().type(data.password)
                    break
                }
            }
        } else if (email_type === 'valid' && password_type === 'incorrect') {
            for(let data of testdata) {
                if (data.type === 'incorrect password') {
                    SigninPageObject.email_box().type(data.email)
                    SigninPageObject.password_box().type(data.password)
                    break
                }
            }
        } else if (email_type === 'invalid') {
            for(let data of testdata) {
                if (data.type === 'invalid email') {
                    SigninPageObject.email_box().type(data.email)
                    break
                }
            }
        } else {
            assert.fail('No combination of email type and password type found')
        }
    }) 
})
