/// <reference types="Cypress" />
// importing classes
import { HomePage } from "./pages/home-page"
import { LoginPage } from "./pages/login-page"
import { SignupPage } from "./pages/signup-page"
import { ContactPage } from "./pages/contact-page"
import { ProductDetailPage } from "./pages/product-detail-page"
import { ProductsPage } from "./pages/products-page"
import { CartPage } from "./pages/cart-page"
import { CheckoutPage } from "./pages/checkout"
import { PaymentPage } from "./pages/payment"

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

describe('', () => {
    beforeEach(()=>{
        cy.visit('https://www.automationexercise.com/')
        homeObj.signupLoginLink()
    })
	it('TC 1: Register New User', ()=>{
        loginObj.signup('Gohar', 'gohar123@invozone.com')
        signupObj.accountInfo('gohar123', '12', 'January', '1997')
        signupObj.addressInfo('gohar', 'abbas', 'address1', 'Canada', 'Ontario', 'Torronto', '4400', '0900')
    })
    it('TC 5: Register User with existing email', ()=>{
        loginObj.signup('Gohar', 'gohar123@invozone.com')
        cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!')
    })
    it('TC 14: Place Order: Register while Checkout', () => {
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
    it('TC 15: Place Order: Register before Checkout', () => {
        loginObj.signup('Gohar', 'papu007@gmail.com')
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
describe('', () => {
    it('TC 2: Login User with correct email and password', () => {
        cy.login()
    })
    it('TC 3: Login User with incorrect email and password', () => {
        cy.visit('https://www.automationexercise.com/')
        homeObj.signupLoginLink()
        loginObj.login('goharabbas@invozone.com', 'gohar')  // incorrect login
        cy.get(loginObj.incorrect_login_assert).should('be.visible') // incorrect login assertion
    })
    it('TC 16: Place Order: Login before Checkout', () => {
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
describe('', () => {
    before(() => {
        cy.login()
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 4: Logout User', () => {
        homeObj.logout()
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 7: Verify Test Cases Page', () => {
        homeObj.testCasesLink()
    })
    it('TC 6: Contact Us Form', () => {
        homeObj.contactUsLink()
        contactObj.contactForm()
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 8: Verify All Products and product detail page', () => {
        homeObj.productLink()
        detailObj.productDetail()
    })
    it('TC 18: View Category Products', () => {
        productObj.viewCategory()
    })
    it('TC 19: View Brand Products', () => {
        productObj.viewBrand()
    })
    it('TC 21: Add review on product', () => {
        homeObj.productLink()
        detailObj.productDetail()
        productObj.writeReview()
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 9: Search Product', () => {
        homeObj.productLink()
        productObj.searchProduct('blue top')
    })
    it('TC 20: Search Products and Verify Cart After Login', () => {
        homeObj.productLink()
        productObj.searchProduct('blue top')
        productObj.addToCart()
        productObj.viewCart()
        homeObj.signupLoginLink()
        loginObj.login('gohar.abbas@invozone.com', 'gohar123')
        homeObj.cartLink()
        cartObj.productAdded()
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 10: Verify Subscription in home page', () => {
        // cy.scrollTo('bottom')
        homeObj.subscription('gohar@gmail.com')
    })
    it('TC 11: Verify Subscription in Cart page', () => {
        homeObj.cartLink()
        homeObj.subscription('gohar@gmail.com')
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 12: Add two different Products in Cart', () => {
        homeObj.productLink()
        productObj.addTwoDiffProducts()
        cartObj.ProductsAddedToCart()
    })
    it('TC 13: Verify Product quantity(04) in Cart', () => {
        homeObj.productLink()
        detailObj.productDetail()
        detailObj.increaseQuantity('4')
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 17: Remove Products From Cart', () => {
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cartObj.removeProduct()
    })
})
describe('', () => {
    before(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 22: Add to cart from Recommended items', () => {
        cy.scrollTo(0, 7500, { duration: 1000 })
        homeObj.addToCartFromRecommendedItems()
    })
})
describe('', () => {
    before(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 23: Verify address details in checkout page', () => {
        homeObj.signupLoginLink()
        loginObj.signup('Gohar', 'abbas@invozone.com')
        signupObj.accountInfo('gohar123', '12', 'January', '1997')
        signupObj.addressInfo('gohar', 'abbas', 'address1', 'Canada', 'Ontario', 'Torronto', '4400', '0900')
        homeObj.productLink()
        productObj.addToCart()
        productObj.viewCart()
        cartObj.proceedCheckout()
        checkObj.verifyAddress()
        homeObj.deleteAccount()
    })
})
describe('', () => {
    it('TC 24: Download Invoice after purchase order', () => {
        cy.login()
        cy.visit('https://www.automationexercise.com/products')
        productObj.addToCart()
        productObj.viewCart()
        cartObj.proceedCheckout()
        homeObj.cartLink()
        cartObj.proceedCheckout()
        checkObj.placeOrder()
        payObj.payAndConfirmOrder('gohar', '0900', '123', '12', '2026')
        payObj.downloadInvoice()
        payObj.clickContinueBtn()
        homeObj.deleteAccount()
    })
})
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })
    it('TC 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        homeObj.bottomToTop()
    })
    it('TC 26: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        homeObj.scrollWithoutBtn()
    })
})