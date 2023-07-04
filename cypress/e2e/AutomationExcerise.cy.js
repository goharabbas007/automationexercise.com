/// <reference types="Cypress" />
// importing classes
import { HomePage } from "./pages/home-page"
import { LoginPage } from "./pages/login-page"
import { SignupPage } from "./pages/signup-page"
import { ContactPage } from "./pages/contact-page"
import { ProductDetailPage } from "./pages/product-detail-page"
import { ProductsPage } from "./pages/products-page"
import { CartPage } from "./cart-page"
import { CheckoutPage } from "./checkout"
import { PaymentPage } from "./payment"

// creating objects for each classes
const homeObj = new HomePage()
const loginObj = new LoginPage()
const signupObj = new SignupPage()
const contactObj = new ContactPage()
const productObj = new ProductsPage()
const detailObj = new ProductDetailPage()
const cartObj = new CartPage()
const checkObj = new CheckoutPage()
const payObj = new PaymentPage()

describe('Verify Registration', () => {
    beforeEach(()=>{
        cy.visit('https://www.automationexercise.com/')
        homeObj.signupLoginLink()
    })
	it('Register New User', ()=>{
        loginObj.signup('Gohar', 'gohar12abbas@invozone.com')
        signupObj.accountInfo('gohar123', '12', 'January', '1997')
        signupObj.addressInfo('gohar', 'abbas', 'address1', 'Canada', 'Ontario', 'Torronto', '4400', '0900')
        homeObj.deleteAccount()
    })
    it('Register User with existing email', ()=>{
        loginObj.signup('Gohar', 'gohar.abbas@invozone.com')
        cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!')
    })
    it('Place Order: Register while checkout', () => {
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cartObj.proceedCheckout()
        cartObj.regLoginLink()
        loginObj.signup('Gohar', 'papu@gmail.com')
        signupObj.accountInfo('gohar123', '12', 'January', '1997')
        signupObj.addressInfo('gohar', 'abbas', 'address1', 'Canada', 'Ontario', 'Torronto', '4400', '0900')
        homeObj.cartLink()
        cartObj.proceedCheckout()
        checkObj.placeOrder()
        payObj.payAndConfirmOrder('gohar', '0900', '123', '12', '2026')
        homeObj.deleteAccount()
    })
    it('Place Order: Register before Checkout', () => {
        loginObj.signup('Gohar', 'papu1@gmail.com')
        signupObj.accountInfo('gohar123', '12', 'January', '1997')
        signupObj.addressInfo('gohar', 'abbas', 'address1', 'Canada', 'Ontario', 'Torronto', '4400', '0900')
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cy.wait(1000)
        cartObj.proceedCheckout()
        checkObj.placeOrder()
        payObj.payAndConfirmOrder('gohar', '0900', '123', '12', '2026')
        homeObj.deleteAccount()
    })
})
describe('Verify Login', () => {
    it('Login User with correct email and password', () => {
        cy.login()
    })
    it('Login User with incorrect email and password', () => {
        cy.visit('https://www.automationexercise.com/')
        homeObj.signupLoginLink()
        loginObj.login('goharabbas@invozone.com', 'gohar')  // incorrect login
    })
    it.only('Place Order: Login before Checkout', () => {
        cy.login()
        cy.visit('https://www.automationexercise.com/')
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cartObj.proceedCheckout()
        checkObj.placeOrder()
        payObj.payAndConfirmOrder('gohar', '0900', '123', '12', '2026')
        homeObj.logout()
    })
})
describe('Verify Logout', () => {
    before(() => {
        cy.login()
        cy.visit('https://www.automationexercise.com/')
    })
    it('logout', () => {
        homeObj.logout()
    })
})
describe('Contact Us page, Test Cases page', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('Verify Test Cases page', () => {
        homeObj.testCasesLink()
    })
    it('Verify Contact form', () => {
        homeObj.contactUsLink()
        contactObj.contactForm()
    })
})
describe('Verify All products and Product detail page', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('Verfiy Product & Product detail page', () => {
        homeObj.productLink()
        detailObj.productDetail()
    })
    it('View Category Products', () => {
        productObj.viewCategory()
    })
    it('View brand products', () => {
        productObj.viewBrand()
    })
})
describe('Verify Search product', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('Verify search product', () => {
        homeObj.productLink()
        productObj.searchProduct('blue top')
        cy.get(productObj.searched_product).should('be.visible')
    })
})
describe('Verify Subscription', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('Subscription in home page', () => {
        // cy.scrollTo('bottom')
        homeObj.subscription('gohar@gmail.com')
    })
    it('Subscription in cart page', () => {
        homeObj.cartLink()
        homeObj.subscription('gohar@gmail.com')
    })
})
describe('Verify Add Products in Cart', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('add two different products in cart', () => {
        homeObj.productLink()
        productObj.addTwoDiffProducts()
        cartObj.ProductsAddedToCart()
    })
    it('Add same Product in cart with 04 Quantity', () => {
        homeObj.productLink()
        detailObj.productDetail()
        detailObj.increaseQuantity('4')
    })
})
describe('Verify Remove Products From Cart', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('Removing products from cart', () => {
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cartObj.removeProduct()
    })
})