import LoginPage from './Pages/LoginPage'
import GestiuneUtilizatoriPage from './Pages/GestiuneUtilizatoriPage'
import Departament from './Pages/DepartamentTable'
import ProgramStudiu from './Pages/ProgramStudiuTable'
import CadruDidactic from './Pages/CadruDidacticTable'
import Student from './Pages/StudentTable'


describe('Autentificare utilizator: user & admin', function () {
    it('Logare aplicatie cu utilizator admin', function () {
        const login = new LoginPage();
            login.visit()
            login.clickContAndAutentificareButton()
            login.autentificare("admin", "admin")
    })

    it('Logare aplicatie cu utilizator user', function () {
        const action = new LoginPage
        action.logout()
        action.clickContAndAutentificareButton()
        action.autentificare("user", "user")
    })
})

describe('Inregistrare si activare cont nou' , () => {

    it('Creare si activare cont nou', function() {
        const action = new LoginPage
        action.logout()
        action.register("DragosIonut", "dragosionut115@gmail.com", "nohaidragos15", "nohaidragos15")
    })

    it('Activare cont utilizator nou din gestiune utilizatori', () => {
        const action = new LoginPage
        const field = new GestiuneUtilizatoriPage
        action.clickContAndAutentificareButton()
        action.autentificare("admin", "admin")
        field.clickGUPage()
        field.activateUser()
        field.giveAdminRole()
        action.logout()
        action.clickContAndAutentificareButton()
        action.autentificare("DragosIonut", "nohaidragos15")
        action.changeName("Dragos Ionut", "Nohai")
    })

})

describe('Adaugare date in entitati', () => {


    it('Adaugare date in Departament', () => {
        const add = new Departament
        add.addDepartamentEntity()
    })

    it('Adaugare date in Program Studiu', () => {
        const add = new ProgramStudiu
        add.addProgramStudiuEntity()
    })

    it('Adaugare date in Cadru Didactic', () => {
        const add = new CadruDidactic
        add.addCadruDidacticEntity()
    })

    it('Adaugare date in Student', () => {
        const add = new Student
        add.addStudentEntity()
    })

})

describe('Stergere date din entitati', () => {


    it('Stergere date tabela Student', () => {
        const action = new Student
        action.deleteStudentEntity()
    })

    it('Stergere date tabela Cadru Didactic', () => {
        const action = new CadruDidactic
        action.deleteCadruDidacticEntity()
    })

    it('Stergere date tabela Program Studiu', () => {
        const action = new ProgramStudiu
        action.deleteProgramStudiuEntity()
    })

    it('Stergere date tabela Departament', () => {
        const action = new Departament
        action.deleteDepartamentEntity()
    })
})

describe('Stergere utilizator si inchidere aplicatie', () => {


    it('Stergere utilizator si inchidere aplicatie', () => {
        const field = new LoginPage
        const action = new GestiuneUtilizatoriPage
        field.logout()
        field.clickContAndAutentificareButton()
        field.autentificare("admin", "admin")
        action.clickGUPage()
        action.deleteUser()
        field.logout()
    })
})
