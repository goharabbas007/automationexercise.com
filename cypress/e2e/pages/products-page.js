export class ProductsPage{
    search_field = '#search_product'
    search_btn = '#submit_search'
    searched_product = '.productinfo > p'
    addToCart_btn_product1 = ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    addToCart_btn_product2 = ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn'
    continue_shopping_btn = '.modal-footer > .btn'
    view_cart_link = 'u'
    success_modal = '.modal-content'
    category_name = ':nth-child(1) > .panel-heading > .panel-title > a'
    sub_category = '#Women > .panel-body > ul > :nth-child(1) > a'
    title_assert = '.title'
    view_brand = '.brands-name > .nav > :nth-child(1) > a'

    searchProduct(searchValue){
        cy.get(this.search_field).type(searchValue)
        cy.get(this.search_btn).click()
    }
    // add two consecutive products in cart
    addTwoDiffProducts(){
        cy.get(this.addToCart_btn_product1).click()
        cy.get(this.continue_shopping_btn).click()
        cy.get(this.addToCart_btn_product2).click()
        cy.get(this.view_cart_link).click()
        cy.url().should('eq', 'https://www.automationexercise.com/view_cart')
    }
    addToCart(){
        cy.get(this.addToCart_btn_product1).click()
        cy.get(this.success_modal).should('be.visible')
    }
    viewCart(){
        cy.get(this.view_cart_link).click()
        cy.url().should('eq', 'https://www.automationexercise.com/view_cart')
    }
    viewCategory(){
        cy.get(this.category_name).click()
        cy.get(this.sub_category).click()
        cy.get(this.title_assert).should('have.text', 'Women - Dress Products')
    }
    viewBrand(){
        cy.get(this.view_brand).click()
        cy.get(this.title_assert).should('have.text', 'Brand - Polo Products')
    }
}