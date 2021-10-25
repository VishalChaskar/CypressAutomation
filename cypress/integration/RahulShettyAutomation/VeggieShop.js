describe('My First TestCase',function()
{
    //navigate to portal and search product and add to cart tc
it('navigate to veggieshop',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').should('have.length',5)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.wait(2000)

})
})