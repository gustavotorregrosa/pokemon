describe('pokedex page elements are there', () => {
  beforeEach('visit site', () => {
    cy.visit('http://localhost:4200')
  })

  it('bulbassaur exists', () => {
    cy.wait(2000);
    cy.get('td').contains('bulbasaur').should('exist');

  })

  it('bulbassaur2 does NOT exist', () => {
    cy.wait(2000);
    cy.get('td').contains('bulbasaur2').should('not.exist');

  })

  it('bulbassaur button', () => {
    cy.wait(2000);
    cy.get('td').contains('bulbasaur').should('exist');
    cy.contains('td', 'bulbasaur').parent('tr').find('button').should('exist').click();
    cy.wait(2000);
    cy.get('span').contains('overgrow, chlorophyll').should('exist');

  });

  it('click on next', () => {
    cy.get('button.mat-mdc-paginator-navigation-next').should('exist').click();
    cy.wait(2000);
    cy.get('td').contains('charizard').should('exist');
  })


})