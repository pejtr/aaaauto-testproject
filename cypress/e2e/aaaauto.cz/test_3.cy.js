import Test3PageObject1 from "../../page_objects/test3_page_object_1";
import Test3PageObject2 from "../../page_objects/test3_page_object_2";

describe('Vyfiltrujte auto a zkontrolujte výsledek filtrování', () => {
  it('Vyplnění filtru a kliknutí na tlačítko "Hledat" + Neprazdny vysledek', () => {
    Test3PageObject1.visitHomepageTillFilter();
    
    Test3PageObject2.showNotBlankResults();
  });
});
