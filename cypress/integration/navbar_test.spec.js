describe('Navigation bar test', () =>{
  it('go to homepage', () =>{
    cy.visit('https://nhatanhnguyenbui.github.io/fatilewebsite/index.html')
  })
  it('test navigation bar menu', () =>{
    cy.contains('Home').click()
    cy.contains('Style').click()
    cy.contains('Fashion').click()
    cy.contains('Travel').click()
    cy.contains('Sports').click()
    cy.contains('Video').click()
    cy.contains('Archives').click()
  })

})
