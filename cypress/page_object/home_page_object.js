export default class home_page_object {

    static desktop_join_button() {
        return cy.get('#join')
    }

    static mobile_join_button() {
        return cy.get('a[data-selector="header-menu-join"]')
    }

    static mobile_user_avatar() {
        return cy.get('button[id="nav-user"]')
    }

    static join_modal() {
        return cy.get('div[data-selector="react-modal-window"]')
    }
    
}