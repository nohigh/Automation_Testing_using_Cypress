import { writeFileSync } from "fs";
import * as XLSX from "xlsx";

const testData = require("D:/Licenta/Cypress/cypress/fixtures/departament.json");

class Departament {

addDepartamentEntity() {
    const tabeleButton = cy.get('span[jhitranslate="global.menu.entities.main"]')
    tabeleButton.contains('Tabele').click()
    const DepartamentButton = cy.get('span[jhitranslate="global.menu.entities.departament"]')
    DepartamentButton.contains('Departament').click()
    const createDepartamentButton = cy.get('button[id="jh-create-entity"]')
    createDepartamentButton.contains('Creare departament').click()

    testData.forEach((testDataRow) => {
        const data = {
            Nume_departament: testDataRow.Nume_departament
        };
     
        cy.get('input[id="field_numeDepartament"]').type(data.Nume_departament);
         cy.get('button[id="save-entity"]').contains("Salvare").click()
         cy.get('button[id="jh-create-entity"]').contains("Creare departament").click()
            
    })
}

deleteDepartamentEntity() {
    
         cy.get('span[jhitranslate="global.menu.home"]').click({force: true})
         cy.get('span[jhitranslate="global.menu.entities.main"]').contains("Tabele").click({force: true})
         cy.get('span[jhitranslate="global.menu.entities.departament"]').contains("Departament").click({force: true})
         //cy.wait(1000)
         cy.get('span[jhitranslate="entity.action.delete"]').should('be.visible')
         cy.get('span[jhitranslate="entity.action.delete"]').click({multiple: true, force: true})
         cy.get('button[id="jhi-confirm-delete-departament"]').should('be.visible')
         cy.get('button[id="jhi-confirm-delete-departament"]').click({multiple: true, force: true})
         .should('not.exist')
         //cy.wait(500)
}

}


export default Departament