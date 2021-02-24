import { writeFileSync } from "fs";
import * as XLSX from "xlsx";


const testData3 = require("D:/Licenta/Cypress/cypress/fixtures/cadruDidactic.json");

class CadruDidactic {

    addCadruDidacticEntity() {
    const tabeleButton = cy.get('span[jhitranslate="global.menu.entities.main"]')
    tabeleButton.contains('Tabele').click()
    const cadruDidacticButton = cy.get('span[jhitranslate="global.menu.entities.cadruDidactic"]')
    cadruDidacticButton.contains('Cadru didactic').click()
    const createCadruDidacticButton = cy.get('button[id="jh-create-entity"]')
    createCadruDidacticButton.contains('Creare cadru didactic').click()

    testData3.forEach((testDataRow3) => {
        const data3 = {
             numeCadruDidactic: testDataRow3.Nume,
             prenumeCadruDidactic: testDataRow3.Prenume,
             titluCadruDidactic: testDataRow3.Titlu,
             emailCadruDidactic: testDataRow3.Email,
             birouCadruDidactic: testDataRow3.Birou,
             departamentCadruDidactic:  testDataRow3.Departament
        };
     
             cy.get('input[id="field_nume"]').type(data3.numeCadruDidactic);
             cy.get('input[id="field_prenume"]').type(data3.prenumeCadruDidactic);
             cy.get('input[id="field_titlu"]').type(data3.titluCadruDidactic);
             cy.get('input[id="field_email"]').type(data3.emailCadruDidactic);
             cy.get('input[id="field_birou"]').type(data3.birouCadruDidactic);
             cy.get('select').eq(0).select(data3.departamentCadruDidactic);
             cy.get('button[id="save-entity"]').contains("Salvare").click();
             cy.get('button[id="jh-create-entity"]').contains("Creare cadru didactic").click()
            
    })
}


  deleteCadruDidacticEntity() {
        cy.get('span[jhitranslate="global.menu.home"]').click({force: true})
        cy.get('span[jhitranslate="global.menu.entities.main"]').contains("Tabele").click({force: true})
        cy.get('span[jhitranslate="global.menu.entities.cadruDidactic"]').contains("Cadru didactic").click({force: true})
        //cy.wait(1500)
        cy.get('span[jhitranslate="entity.action.delete"]').should('be.visible')
        cy.get('span[jhitranslate="entity.action.delete"]').click({multiple: true, force: true})
        cy.get('button[id="jhi-confirm-delete-cadruDidactic"]').should('be.visible')
        cy.get('button[id="jhi-confirm-delete-cadruDidactic"]').click({multiple: true, force: true})
         .should('not.exist'); 
  }
}

export default CadruDidactic