import { fireEvent, render } from "@testing-library/react"
import ActionButton from "./index"

describe('more vertical action button', () => {

    it('should open modal', () => {
        const {getByTestId, getByText} = render(<ActionButton><div>element</div></ActionButton>)

        const buttonElement = getByTestId('more-btn')
        fireEvent.click(buttonElement)

        const element = getByText('element')

        expect(element).toBeInTheDocument()
    })
})