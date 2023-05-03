import { ButtonOrDiv } from "./ButtonOrDiv"
import { render, screen } from "@testing-library/react"

describe("<ButtonOrDiv>", () => {
    it("shows a button", () => {
        render(<ButtonOrDiv button={true} />)
        expect(screen.getByTestId("button")).to.be("be.visible")
    })
})