import HomePage from "../../page_objects/test2_page_object"; 

describe('Zobrazeni dulezitych elementu na homepage', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Zobrazeni horni hlavickove listy', () => {
    HomePage.getHeader().should('be.visible');
  });

  it('Zobrazeni API slider banneru', () => {
    HomePage.getApiSliderBanner().should('be.visible');
  });

  it('Zobrazeni filter baru', () => {
    HomePage.getFilterBar().should('be.visible');
  });
});
