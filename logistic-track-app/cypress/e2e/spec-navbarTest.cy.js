context('Navigation', () => {
    it('can navigate around the website', () => {
      cy.visit('https://logistic-track-app.web.app');
  
      cy.get('[data-cy="header-link-about"]').click();
      cy.get('main:contains("About")');
  
      cy.get('[data-cy="header-link-users"]').click();
      cy.get('main h1:contains("Users")');
    });
  });