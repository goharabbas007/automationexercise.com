export class LoginPage{
    // defining locators 
    name_field = '[data-qa="signup-name"]'
    signup_email_field = '[data-qa="signup-email"]'
    signup_btn = '[data-qa="signup-button"]'
    login_email = '[data-qa="login-email"]'
    login_password = '[data-qa="login-password"]'
    login_btn = '[data-qa="login-button"]'
    incorrect_login_assert = '.login-form > form > p'
    
    signup(name, email){
        cy.get(this.name_field).type(name)
        cy.get(this.signup_email_field).type(email)
        cy.get(this.signup_btn).click()
    }
    login(email, password){
        cy.get(this.login_email).type(email)
        cy.get(this.login_password).type(password)
        cy.get(this.login_btn).click()
    }
}