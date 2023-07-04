export class ContactPage{
    contact_name = '[data-qa="name"]'
    contact_email = '[data-qa="email"]'
    contact_subject = '[data-qa="subject"]'
    contact_message = '[data-qa="message"]'
    choose_file = ':nth-child(6) > .form-control'
    submit_btn = '[data-qa="submit-button"]'

    contactForm(){
        cy.get(this.contact_name).type('testing')
        cy.get(this.contact_email).type('email@gmail.com')
        cy.get(this.contact_subject).type('testing contact form')
        cy.get(this.contact_message).type('contact form message to be sent')
        cy.get(this.choose_file).selectFile('cypress/fixtures/example.json', {force:true})
        cy.get(this.submit_btn).click()
    }
}