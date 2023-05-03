import { ButtonOrDiv } from "./ButtonOrDiv.js"

describe("<ButtonOrDiv>", () => {
    it("makes a button", () => {
        cy.mount(<ButtonOrDiv button={true} />)
    })
})