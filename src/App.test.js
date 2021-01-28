import {render as rtlRender, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import App from './App'

// this is a handy function that I would utilize for any component
// that relies on the router being in context
const render = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return rtlRender(ui, {wrapper: Router})
  }

  test('full app rendering/navigating', () => {
    render(<App />)
    expect(screen.getByText(/This Page is under construction you can go to the/i)).toBeInTheDocument()

    userEvent.click(screen.getByTestId(/Entries/i))

    expect(screen.getByText(/This Page is under construction you can go to the/i)).toBeInTheDocument()

    userEvent.click(screen.getByTestId(/Divisions/i))


    expect(screen.getByText(/Divisions Summary/i)).toBeInTheDocument()
    expect(screen.getByText(/Ongoing metric/i)).toBeInTheDocument()
    expect(screen.getByText(/Past metric/i)).toBeInTheDocument()
    expect(screen.getByText(/Missed metric/i)).toBeInTheDocument()
    expect(screen.getByText(/Failed metric/i)).toBeInTheDocument()
    expect(screen.getByText(/Pending metric/i)).toBeInTheDocument()
  })


  test('landing on a bad page', () => {
    render(<App />, {route: '/something-that-does-not-match'})

    expect(screen.getByText(/This Page is under construction you can go to the/i)).toBeInTheDocument()
  })
