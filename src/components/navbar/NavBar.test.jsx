import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '..';
import { renderComponent } from '../../utils';

test('renders nav links', () => {
    renderComponent(<NavBar />)

    const homeLink = screen.getByTestId('test-Home');
  const entriesLink = screen.getByTestId(/test-Entries/i);
  const divisionsLink = screen.getByTestId(/test-Divisions/i);
  const BrandLink = screen.getByText(/Engineer/i);

  expect(homeLink).toBeInTheDocument();
  expect(entriesLink).toBeInTheDocument();
  expect(divisionsLink).toBeInTheDocument();
  expect(BrandLink).toBeInTheDocument();
});

test('renders input and allow typing', () => {

    renderComponent(<NavBar />)


    const searchLink = screen.getByTestId('nav-input');
    const text = 'stuff'
    userEvent.type(searchLink, text)

  expect(searchLink).toBeInTheDocument();
  expect(searchLink.value).toEqual(text)
});
