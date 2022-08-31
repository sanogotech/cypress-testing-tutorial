describe('todolist app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Page Should Containt The Following Strings', () => {
    cy.get('#heading').contains('todolist').should('be.visible')
    cy.get('#subHeading').contains('What needs to be done?').should('be.visible')
    cy.get('#todoText').should('be.empty').and('be.visible')
    cy.get('#addBtn').contains('Add').should('be.visible')
    cy.contains('There\'s nothing to do today.').should('be.visible')
  })

  it('Input Should Have Required Attribute', () => {
    cy.get('#todoText').should('have.attr', 'required')
  })

  it('Should Add Two New Todos to The List', () => {
    cy.get('#todoText').should('be.empty').and('be.visible').type('Learn About Cypress')
    cy.get('#addBtn').contains('Add').should('be.visible').click()
    cy.get('#todoText').should('be.empty').and('be.visible').type('Learn About Cypress{enter}')
    cy.get('.list-group-item').should('be.visible')
    cy.get('.list-group > .btn').contains('Delete list').should('be.visible')
  })

  it('Todo Item Should Contain The Following', () => {
    cy.get('#todoText').should('be.empty').and('be.visible').type('Learn About Cypress{enter}')
    cy.get('.list-group > .btn').contains('Delete list').should('be.visible')
    cy.get('.list-group-item').should('be.visible')
    cy.get('.form-check-input').should('be.visible')
    cy.get('.pointerMouse').should('be.visible')
  })

  it('Should Mark a Todo Item As Done And Delete It', () => {
    cy.get('#todoText').should('be.empty').and('be.visible').type('Learn About Cypress{enter}')
    cy.get('.form-check-input').should('be.visible').check()
    cy.get('.pointerMouse').should('be.visible').click()
  })

  it('Sould Mark And Then Delete All The Items In The List', () => {
    cy.get('#todoText').should('be.empty').and('be.visible').type('Learn About Cypress{enter}')
    cy.get('#todoText').should('be.empty').and('be.visible').type('Programming{enter}')
    cy.get('#todoText').should('be.empty').and('be.visible').type('Working Out{enter}')
    cy.get(':nth-child(1) > .form-check-input').should('be.visible').check()
    cy.get(':nth-child(2) > .form-check-input').should('be.visible').check()
    cy.get(':nth-child(3) > .form-check-input').should('be.visible').check()
    cy.get('.list-group > .btn').contains('Delete list').should('be.visible').click()
    cy.contains('There\'s nothing to do today.').should('be.visible')
  })
})