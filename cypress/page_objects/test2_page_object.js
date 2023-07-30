class HomePage {
    // Method for visit before each hook
    visit() {
      cy.visit('https://www.aaaauto.cz'); // Homepage visit
      cy.wait(1000); // Wait for 1 second
      cy.get('[data-cookie-save="all"]').first().click();   // Accept all cookies
    }
  
    // Method for header
    getHeader() {
      return cy.get('header.header'); 
    }
  
    // Method for api slide banner
    getApiSliderBanner() {
      return cy.get('div.apiSlider'); 
    }
  
    // Method for filter bar
    getFilterBar() {
      return cy.get('div.hfilter#hpFilterNG'); 
    }
}

export default new HomePage();
