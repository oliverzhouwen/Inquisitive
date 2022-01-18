export default class mapping_lesson_page_object {
    
    static second_page() {
        return cy.get('div[class*="card-carouselstyle"] ul li').eq(1)
    }
}