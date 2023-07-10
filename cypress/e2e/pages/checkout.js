export class CheckoutPage{
    comment_field = '.form-control'
    place_order_btn = ':nth-child(7) > .btn'
    delivery_address = '#address_delivery > :nth-child(4)'
    billing_address = '#address_invoice > :nth-child(4)'

    placeOrder(){
        cy.get(this.comment_field).type('placing an order')
        cy.get(this.place_order_btn).click()
    }
    verifyAddress(){
        cy.get(this.delivery_address).should('have.text', 'address1')
        cy.get(this.delivery_address).should('have.text', 'address1')
    }
}