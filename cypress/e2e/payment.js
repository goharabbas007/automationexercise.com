export class PaymentPage{
    name_field = '[data-qa="name-on-card"]'
    card_number = '[data-qa="card-number"]'
    cvc_field = '[data-qa="cvc"]'
    exp_month = '[data-qa="expiry-month"]'
    exp_year = '[data-qa="expiry-year"]'
    confirm_order_btn = '[data-qa="pay-button"]'
    order_confirm_text = '.col-sm-9 > p'
    continue_btn = '[data-qa="continue-button"]'

    payAndConfirmOrder(name, no, cvc, month, year){
        cy.get(this.name_field).type(name)
        cy.get(this.card_number).type(no)
        cy.get(this.cvc_field).type(cvc)
        cy.get(this.exp_month).type(month)
        cy.get(this.exp_year).type(year)
        cy.get(this.confirm_order_btn).click()
        cy.get(this.order_confirm_text).should('be.visible')
    }
    downloadInvoice(){
        // below code is avoid infinite loading of page
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.get('.btn-default').contains('Download Invoice').click()
        })
        // assertion
        cy.readFile('/Users/goharabbas/Downloads/invoice.txt').should('exist')
    }
    clickContinueBtn(){
        cy.get('[data-qa="continue-button"]')
    }
}