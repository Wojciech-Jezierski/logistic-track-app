const { cyan } = require("@mui/material/colors")

describe("Login", () => {
    it("Print login input", () => {
        cy.visit("https://logistic-track-app.web.app");
        cy.get("input[name='']").type("knack@gmail.com")
        cy.get("input[name='']").type("knacyk9*")
    })
})