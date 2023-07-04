// import { HomePage } from "./home-page"

// const obj = new HomePage()

export class SignupPage{
    select_gender = '#id_gender1'
    password = '[data-qa="password"]'
    select_day = '[data-qa="days"]'
    select_month = '[data-qa="months"]'
    select_year = '[data-qa="years"]'
    fname = '[data-qa="first_name"]'
    lname = '[data-qa="last_name"]'
    address = '[data-qa="address"]'
    country = '[data-qa="country"]'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zipcode = '[data-qa="zipcode"]'
    mobile = '[data-qa="mobile_number"]'
    create_account_btn = '[data-qa="create-account"]'
    continue_btn = '[data-qa="continue-button"]'
    logout_link = '.shop-menu > .nav > :nth-child(4) > a'

    accountInfo(password, day, month, year){
        cy.get(this.select_gender).check()
        cy.get(this.password).type(password)
        cy.get(this.select_day).select(day)
        cy.get(this.select_month).select(month)
        cy.get(this.select_year).select(year)
    }
    addressInfo(fname, lname, address, country, state, city, zipcode, mobile){
        cy.get(this.fname).type(fname)
        cy.get(this.lname).type(lname)
        cy.get(this.address).type(address)
        cy.get(this.country).select(country)
        cy.get(this.state).type(state)
        cy.get(this.city).type(city)
        cy.get(this.zipcode).type(zipcode)
        cy.get(this.mobile).type(mobile)
        cy.get(this.create_account_btn).click()
        cy.get(this.continue_btn).should('be.visible')
        cy.get(this.continue_btn).click()
        cy.get(this.logout_link).should('have.text', ' Logout')
    }
}