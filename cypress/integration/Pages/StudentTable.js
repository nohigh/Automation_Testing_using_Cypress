import { writeFileSync } from "fs";
import * as XLSX from "xlsx";


const testData4 = require("D:/Licenta/Cypress/cypress/fixtures/student.json")

class Student {

    addStudentEntity() {
    const tabeleButton = cy.get('span[jhitranslate="global.menu.entities.main"]')
    tabeleButton.contains('Tabele').click()
    const studentButton = cy.get('span[jhitranslate="global.menu.entities.student"]')
    studentButton.contains('Student').click()
    const createStudentButton = cy.get('button[id="jh-create-entity"]')
    createStudentButton.contains('Creare student').click()

    testData4.forEach((testDataRow4) => {
        const data4 = {
            numeStudent: testDataRow4.Nume,
             prenumeStudent: testDataRow4.Prenume,
             numarMatricolStudent: testDataRow4.Numar_matricol,
             lucrareLicentaStudent: testDataRow4.Lucrare_licenta,
             liniaDePredareStudent: testDataRow4.Linia_de_predare,
             formaDeInvatamantStudent:  testDataRow4.Forma_de_invatamant,
             profesorCoordonatorStudent:  testDataRow4.Profesor_coordonator
        };
     
             cy.get('input[id="field_nume"]').type(data4.numeStudent);
             cy.get('input[id="field_prenume"]').type(data4.prenumeStudent);
             cy.get('input[id="field_numarMatricol"]').type(data4.numarMatricolStudent);
             cy.get('input[id="field_lucrareLicenta"]').type(data4.lucrareLicentaStudent);
             cy.get('select[id="field_linia"]').eq(0).select(data4.liniaDePredareStudent);
             cy.get('select[id="field_forma"]').eq(0).select(data4.formaDeInvatamantStudent);
             cy.get('select[id="field_cadruDidactic"]').eq(0).select(data4.profesorCoordonatorStudent);
             cy.get('button[id="save-entity"]').contains("Salvare").click();
             cy.get('button[id="jh-create-entity"]').contains("Creare student").click()
            
    })
}

    deleteStudentEntity() {
         cy.get('span[jhitranslate="global.menu.home"]').click()
         cy.get('span[jhitranslate="global.menu.entities.main"]').contains("Tabele").click()
         cy.get('span[jhitranslate="global.menu.entities.student"]').contains("Student").click()
         cy.get('span[jhitranslate="entity.action.delete"]').should('be.visible')
         cy.get('span[jhitranslate="entity.action.delete"]').click({multiple: true, force: true})
          cy.get('button[id="jhi-confirm-delete-student"]').should('be.visible')
         cy.get('button[id="jhi-confirm-delete-student"]').click({multiple: true, force: true})
             .should('not.exist'); 
         //cy.wait(1000)
    }
}

export default Student