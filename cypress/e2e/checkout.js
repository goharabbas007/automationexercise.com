export class CheckoutPage{
    comment_field = '.form-control'
    place_order_btn = ':nth-child(7) > .btn'

    placeOrder(){
        cy.get(this.comment_field).type('placing an order')
        cy.get(this.place_order_btn).click()
    }
}