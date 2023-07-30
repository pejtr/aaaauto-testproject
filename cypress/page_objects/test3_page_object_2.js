class Test3PageObject2 {
    // Method to show not blank results
    showNotBlankResults() {
      // Show not blank results
      cy.get('#carsGrid .carInfo').each(($carInfo) => {
        cy.wrap($carInfo).should('be.visible');
      });
    }
  }
  
  export default new Test3PageObject2();
  