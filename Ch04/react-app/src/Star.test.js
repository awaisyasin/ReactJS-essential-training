import { Star } from './Star.js'
import { render, screen } from '@testing-library/react'

test('Rendering an h1', () => {
    render(<Star />)
    const h1 = screen.getByText(/Hello Stars!/)
    expect(h1).toHaveTextContent('Hello Stars!')
})
