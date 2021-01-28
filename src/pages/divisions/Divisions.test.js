import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../../utils';
import { DivisionsSummary, DivisionsTable, ModuleHistory, StatisticsCards } from './components';
test('renders Divisions Summary', () => {
    renderComponent(<DivisionsSummary />)

   expect( screen.getByText('Divisions Summary')).toBeInTheDocument()
   expect( screen.getByText('0801 234 5678')).toBeInTheDocument()
   expect( screen.getByText('asbfefr@gmail.com')).toBeInTheDocument()
   expect( screen.getByText('Mojidi, Lagos')).toBeInTheDocument()
   expect( screen.getByText('2 Journal entries')).toBeInTheDocument()
    expect(screen.getByText('24 fingerprints enrolled')).toBeInTheDocument()
});

test('renders Module History', () => {
    renderComponent(<ModuleHistory />)
   expect( screen.getByText('Module History')).toBeInTheDocument()
   expect( screen.getByText(/"Journal Entries"/)).toBeInTheDocument()
   expect( screen.getByText(/“Fingerprint record”/)).toBeInTheDocument()
   expect( screen.getByText(/"Journal Entries Today"/)).toBeInTheDocument()
});

test('renders Statistics Cards', () => {
    renderComponent(<StatisticsCards />)
   expect( screen.getByText(/Ongoing metric/)).toBeInTheDocument()
   expect( screen.getByText(/Past metric/)).toBeInTheDocument()
   expect( screen.getByText(/Missed metric/)).toBeInTheDocument()
   expect( screen.getByText(/Failed metric/)).toBeInTheDocument()
   expect( screen.getByText(/Pending metric/)).toBeInTheDocument()
});

test('hover Statistics Cards info icon', () => {
    renderComponent(<StatisticsCards />)

    userEvent.hover(screen.getByTestId(/info-Ongoing/i))
    expect(screen.getByText(/is currently running/)).toBeInTheDocument()

    userEvent.hover(screen.getByTestId(/info-Past/i))
    expect(screen.getByText(/has past the time of execution/)).toBeInTheDocument()

    userEvent.hover(screen.getByTestId(/info-Missed/i))
    expect(screen.getByText(/the metric was missed/)).toBeInTheDocument()

    userEvent.hover(screen.getByTestId(/info-Failed/i))
    expect(screen.getByText(/the metric that has failed/)).toBeInTheDocument()

    userEvent.hover(screen.getByTestId(/info-Pending/i))
    expect(screen.getByText(/on queue to be attended to/)).toBeInTheDocument()
  })
