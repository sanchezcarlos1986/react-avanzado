/* eslint-disable no-undef */
describe('Petgram', () => {
  it('visit Home page', function () {
    cy.visit('/')
  })
  it('visit one pet category', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('visit Homepage from another page', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('Not registered users go to login', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
    cy.url().should('include', '/login')
  })
})
