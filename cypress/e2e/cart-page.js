export class CartPage{
    product_name = '#product-1 > .cart_description > h4 > a'
    product_name2 = '#product-2 > .cart_description > h4 > a'
    proceed_checkout_btn = '.col-sm-6 > .btn'
    reg_login_link = '.modal-body > :nth-child(2) > a > u'
    checkout_modal = '.modal-content'
    remove_product_btn = '.cart_quantity_delete'

    ProductsAddedToCart(){
        cy.get(this.product_name).should('be.visible')
        cy.get(this.product_name2).should('be.visible')
    }
    productAdded(){
        cy.get(this.product_name).should('be.visible')
    }
    proceedCheckout(){
        cy.get(this.proceed_checkout_btn).click()
    }
    regLoginLink(){
        cy.get(this.reg_login_link).click()
        cy.url().should('eq', 'https://www.automationexercise.com/login')
    }
    removeProduct(){
        cy.get(this.remove_product_btn).click()
    }
}