import { CheckBox } from './Checkbox'
import { fireEvent, render, screen } from '@testing-library/react'

test('Selecting checkbox should change the value true', () => {
    render(<CheckBox />)
    const checkbox = screen.getByLabelText(/not checked/i)
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
})
