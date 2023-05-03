import { ButtonOrDiv } from "./ButtonOrDiv.js"

describe("<ButtonOrDiv>", () => {
    it("makes a button", () => {
        cy.mount(<ButtonOrDiv button={true} />)
        cy.get("[data-testid=button]").should("be.visible")
    })
    it("makes a div", () => {
        cy.mount(<ButtonOrDiv button={false} />)
        cy.get("[data-testid=divider]").should("be.visible")
    })
})