describe('My First TestCase',function()
{
it('navigate to google',function(){
    cy.visit("www.flipkart.com")
})
it('navigate to amazon',()=>{
cy.visit('www.amazon.com')
})

it('navigate to apple.com',function(){
cy.visit('www.apple.com')
})

})