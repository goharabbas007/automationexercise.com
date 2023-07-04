export class ProductDetailPage{
    view_product = ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
    product_name = '.product-information > h2'
    product_category = '.product-information > :nth-child(3)'
    product_price = ':nth-child(5) > span'
    product_availibility = '.product-information > :nth-child(6)'
    product_condition = '.product-information > :nth-child(7)'
    product_brand = '.product-information > :nth-child(8)'
    quantity = '#quantity'

    productDetail(){
        cy.get(this.view_product).click()
        cy.get(this.product_name).should('be.visible')
        cy.get(this.product_category).should('be.visible')
        cy.get(this.product_price).should('be.visible')
        cy.get(this.product_availibility).should('be.visible')
        cy.get(this.product_condition).should('be.visible')
        cy.get(this.product_brand).should('be.visible')
    }
    increaseQuantity(no){
        cy.get(this.quantity).clear().type(no)
    }
}