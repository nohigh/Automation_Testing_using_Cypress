class LoginPage {


    visit () {
        cy.visit('http://localhost:8080')
    }


    clickContAndAutentificareButton() {
        const contButton = cy.get('a[id="account-menu"]')
        contButton.contains('Cont').click()
        const autentificareButton = cy.get('a[id="login"]')
        autentificareButton.contains('Autentificare').click()
        return this
    }

    autentificare(username1, password1) {
        const username = cy.get('input[id="username"]');
         username.type(username1);
        const password = cy.get('input[id="password"]');
        password.type(password1);
        const rememberMeButton = cy.get('input[id="rememberMe"]');
        rememberMeButton.click();
        const autentificareButton = cy.get('button[class="btn btn-primary"]');
        autentificareButton.click();
        const welcomeText = cy.get('h1[class="display-4"]');
        welcomeText.should('have.text', 'Bine ai venit în aplicația de testare!');
        const autentificareText = cy.get('div[class="alert alert-success"]');
        return this;
    }

    logout() {
        const contButton = cy.get('a[id="account-menu"]')
        contButton.contains('Cont').click()
        const logoutButton = cy.get('a[id="logout"]')
        logoutButton.contains('Ieșire').click()
        const welcomeText = cy.get('h1[class="display-4"]');
        welcomeText.should('have.text', 'Bine ai venit în aplicația de testare!');
    }

    register(user, email, password, confirmpassword) {
        const contButton = cy.get('a[id="account-menu"]')
        contButton.contains('Cont').click()
        const inregistrareButton = cy.get('a[class="dropdown-item"]')
        inregistrareButton.contains('Înregistrare').click()
        const loginField = cy.get('input[id="login"]')
        loginField.type(user)
        const emailField = cy.get('input[id="email"]')
        emailField.type(email)
        const passwordField = cy.get('input[id="password"')
        passwordField.type(password)
        const confirmpasswordfield = cy.get('input[id="confirmPassword"]')
        confirmpasswordfield.type(confirmpassword)
        const inregistrareButton2 = cy.get('button[class="btn btn-primary"]')
        inregistrareButton2.contains('Înregistrare').click()
        const confirmareAlert = cy.get('div[class="alert alert-success"]')
        confirmareAlert.should('have.text', 'Înregistrare salvată! Vă rugăm să vă verificați emailul pentru confirmare.')

    }

    changeName(firstname, lastname) {
        const contButton = cy.get('a[id="account-menu"]')
        contButton.contains('Cont').click()
        const accountSettingsButton = cy.get('span[jhitranslate="global.menu.account.settings"]')
        accountSettingsButton.contains('Setări').click()
        const firstnameField = cy.get('input[id="firstName"]')
        firstnameField.type(firstname)
        const lastnameField = cy.get('input[id="lastName"]')
        lastnameField.type(lastname)
        const submitButton = cy.get('button[type="submit"]')
        submitButton.click()
        const alertMessage = cy.get('div[class="alert alert-success"]')
        alertMessage.should('have.text', "Setări salvate!")

    }


}
    export default LoginPage