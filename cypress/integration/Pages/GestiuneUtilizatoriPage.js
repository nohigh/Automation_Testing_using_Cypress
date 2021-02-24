class GestiuneUtilizatoriPage {

    clickGUPage() {
        const administrareButton = cy.get('a[id="admin-menu"]')
        administrareButton.contains('Administrare').click()
        const gestiuneUtilizatoriButton = cy.get('a[ng-reflect-router-link="admin/user-management"]')
        gestiuneUtilizatoriButton.contains('Gestiune utilizatori').click()
    }

    activateUser() {
        const dezactivatButton = cy.get('button[jhitranslate="userManagement.deactivated"]')
        dezactivatButton.should('have.text', 'Dezactivat').click()
    }

    giveAdminRole() {
        const editareButton = cy.get('span[jhitranslate="entity.action.edit"]')
        editareButton.last().contains('Editare').click()
        const optionAdmin = cy.get('option[ng-reflect-value="ROLE_ADMIN"]')
        optionAdmin.contains('ROLE_ADMIN').click()
        const submitButton = cy.get('button[type="submit"]')
        submitButton.contains('Salvare').click()
    }

    deleteUser() {
        const deleteButton = cy.get('span[jhitranslate="entity.action.delete"]')
        deleteButton.last().contains('Ștergere').click()
        const confirmationButton = cy.get('button[class="btn btn-danger"]')
        confirmationButton.contains('Ștergere').click()
        
    }

}

export default GestiuneUtilizatoriPage