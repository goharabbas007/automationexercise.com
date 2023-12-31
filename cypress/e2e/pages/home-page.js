export class HomePage{
    // defining locators 
    signup_login_link = '.shop-menu > .nav > :nth-child(4) > a'
    signup_assert = '.signup-form > h2'
    logout_link = '.shop-menu > .nav > :nth-child(4) > a'
    contact_link = '.shop-menu > .nav > :nth-child(8) > a'
    contact_assert = '.col-sm-12 > .title'
    testcases_link = '.shop-menu > .nav > :nth-child(5) > a'
    testcases_assert = 'b'
    product_link = '.shop-menu > .nav > :nth-child(2) > a'
    product_assert = '.title'
    subscribe_field = '#susbscribe_email'
    subscribe_btn = '#subscribe'
    subscribe_success = '.alert-success'
    cart_link = '.shop-menu > .nav > :nth-child(3) > a'
    delete_account_link = '.shop-menu > .nav > :nth-child(5) > a'
    deletion_assert = '.col-sm-9 > :nth-child(2)'
    addToCart_btn_recommended_item = '.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn'
    product_added_success = '.modal-content'
    scroll_up_btn = '#scrollUp > .fa'
    scroll_up_assert = '.active > :nth-child(1) > h2'

    signupLoginLink(){
        cy.get(this.signup_login_link).click()
        cy.get(this.signup_assert).should('have.text', 'New User Signup!')
    }
    contactUsLink(){
        cy.get(this.contact_link).click()
        cy.get(this.contact_assert).should('be.visible')
    }
    testCasesLink(){
        cy.get(this.testcases_link).click()
        cy.get(this.testcases_assert).should('have.text', 'Test Cases')
    }
    productLink(){
        cy.get(this.product_link).click()
        cy.get(this.product_assert).should('have.text', 'All Products')
    }
    cartLink(){
        cy.get(this.cart_link).click()
        cy.url().should('eq', 'https://www.automationexercise.com/view_cart')
    }
    logout(){
        cy.get(this.logout_link).click()
        cy.get(this.signup_assert).should('have.text', 'New User Signup!')
    }
    subscription(email){
        cy.get(this.subscribe_field).type(email)
        cy.get(this.subscribe_btn).click()
        cy.get(this.subscribe_success).should('be.visible')
    }
    deleteAccount(){
        cy.get(this.delete_account_link).click()
        cy.get(this.deletion_assert).should('be.visible')
    }
    addToCartFromRecommendedItems(){
        cy.get(this.addToCart_btn_recommended_item).click()
        cy.get(this.product_added_success).should('be.visible')
    }
    bottomToTop(){
        cy.scrollTo('bottom', { duration: 1000 })
        cy.get(this.subscribe_field).should('be.visible')
        cy.get(this.scroll_up_btn).click()
        cy.get(this.scroll_up_assert).should('be.visible')
    }
    scrollWithoutBtn(){
        cy.scrollTo('bottom', { duration: 1000 })
        cy.get(this.subscribe_field).should('be.visible')
        cy.scrollTo('top', { duration: 1000 })
        cy.get(this.scroll_up_assert).should('be.visible')
    }
}