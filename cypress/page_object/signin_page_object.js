export default class signin_page_object {

    static sign_in_button() {
        return cy.get('button[data-selector="sign-in-button"]')
    }

    static email_box() {
        return cy.get('input#email')
    }

    static password_box() {
        return cy.get('input#password')
    }

    static email_error_message() {
        return cy.get('#signin-error-email')
    }

    static password_error_message() {
        return cy.get('#signin-error-password')
    }

    static password_or_email_incorrect_error() {
        return cy.get('div#signin-error')
    }
}