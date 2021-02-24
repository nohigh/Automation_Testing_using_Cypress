import { writeFileSync } from "fs";
import * as XLSX from "xlsx";


const testData2 = require("D:/Licenta/Cypress/cypress/fixtures/programStudiu.json");

class ProgramStudiu {
       
    addProgramStudiuEntity() {
    const tabeleButton = cy.get('span[jhitranslate="global.menu.entities.main"]')
    tabeleButton.contains('Tabele').click()
    const programStudiuButton = cy.get('span[jhitranslate="global.menu.entities.programStudiu"]')
    programStudiuButton.contains('Program studiu').click()
    const createProgramStudiuButton = cy.get('button[id="jh-create-entity"]')
    createProgramStudiuButton.contains('Creare program studiu').click()

    testData2.forEach((testDataRow2) => {
        const data2 = {
            numeProgram: testDataRow2.Program,
            numeDepartament: testDataRow2.Departament
        };
     
            cy.get('input[id="field_program"]').type(data2.numeProgram);
            cy.get('select').eq(0).select(data2.numeDepartament)
            cy.get('button[id="save-entity"]').contains("Salvare").click()
            cy.get('button[id="jh-create-entity"]').contains("Creare program studiu").click()
            
    })
}

    deleteProgramStudiuEntity() {
          cy.get('span[jhitranslate="global.menu.home"]').click({force: true})
         cy.get('span[jhitranslate="global.menu.entities.main"]').contains("Tabele").click({force: true})
         cy.get('span[jhitranslate="global.menu.entities.programStudiu"]').contains("Program studiu").click({force: true})
         //cy.wait(1000)
         cy.get('span[jhitranslate="entity.action.delete"]').should('be.visible')
         cy.get('span[jhitranslate="entity.action.delete"]').click({multiple: true, force: true})
         cy.get('button[id="jhi-confirm-delete-programStudiu"]').should('be.visible')
         cy.get('button[id="jhi-confirm-delete-programStudiu"]').click({multiple: true, force: true})
         .should('not.exist'); 
    }

}


export default ProgramStudiu