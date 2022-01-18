export default class about_page_object {

    static differentiation_text() {
        return cy.get('div[data-scroll-id="differentiation"]>div>h2')
    }
    
}