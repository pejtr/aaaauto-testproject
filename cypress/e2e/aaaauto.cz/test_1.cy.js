Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe('Test select options', () => {
  it('E2E - Skoda/Citigo/2013-2023/Cena do 200tis/Usporne vozy/Hledat/Neprazdny vysledek', () => {
    // Variables declaration
    const currentYear = new Date().getFullYear().toString();
    const tenYearsAgo = (new Date().getFullYear() - 10).toString();

    // Homepage visit
    cy.visit('https://www.aaaauto.cz'); 

    // Accept all cookies
    cy.get('[data-cookie-save="all"]').first().click();

    // Scroll to the top of the page
    cy.scrollTo('top');

    // Fill in the filter
    cy.get('a.homepageCategoryItem[href="/skoda/"]').click();

    // Open the model filter options
    cy.get('button[type="button"][id="model"][data-default-title="Model"]').click();

    // Select 'Citigo' from the model filter options
    cy.contains('span', 'Citigo').click();
    cy.wait(2000); // Wait for 2 seconds

    // Close the model filter options
    cy.get('button[type="button"][id="model"][data-default-title="Model"]').click();
    cy.wait(1000); // Wait for 1 second
    cy.get('div.selectContent').should('be.hidden');  // Wait until the options are hidden

    // Select years
    cy.get('div.row div.col6:nth-child(1) #ymin').click();
    cy.wait(1000); // Wait for 1 second
    cy.contains('a', tenYearsAgo).click();
    cy.wait(500); // Wait for half a second
    cy.get('div.row div.col6:nth-child(1) #ymin').click();  // Close the year filter options
    cy.get('div.selectContent').should('be.hidden');  // Wait until the options are hidden

    // Open the year filter options again
    cy.get('div.row div.col6:nth-child(2) #ymax').click();
    cy.wait(1000); // Wait for 1 second

    // Find the element with the text "do currentYear" and click it
    cy.contains('span', `do ${currentYear}`).click();
    cy.wait(500); // Wait for half a second
    cy.get('div.row div.col6:nth-child(2) #ymax').click({ force: true });  // Close the year filter options
    cy.get('div.selectContent').should('be.hidden');  // Wait until the options are hidden

    // Open the Cena Do filter options
    cy.get('div.select[data-select-name="pmax"] button[type="button"][id="pmax"][data-default-title="Do"]').click({ force: true });

    // Select 'Do 200 000 Kč' for Cena Do
    cy.contains('a', 'do 200 000 Kč').click();
    cy.wait(500); // Wait for half a second
    cy.get('div.select[data-select-name="pmax"] div.selectContent').should('be.hidden'); // Wait until the options are hidden

    // Scroll to the top of the page
    cy.scrollTo('top');

    // Open the Kategorie filter options
    cy.get('div.select[data-select-name="category"] button[type="button"][id="category"][data-default-title="Kategorie"]').click();

    // Select 'Úsporné vozy' from the Kategorie filter options
    cy.contains('span', 'Úsporné vozy').click();
    cy.wait(500); // Wait for half a second
    cy.get('div.select[data-select-name="category"] div.selectContent').should('be.hidden'); // Wait until the options are hidden

    // Click the "Hledat" button
    cy.get('#modern2019-search-submit').click();

    // Show not blank results
    cy.get('#carsGrid .carInfo').each(($carInfo) => {
      cy.wrap($carInfo).should('be.visible');
    });
  });
});
