import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import MetricCard from '.';
import { renderComponent } from '../../utils';


test('renders MetricCard', () => {
    let data={
        stat:'1234',
        info:'This is the info',
        title:'This is the title'
    }
 renderComponent( <MetricCard data={data}/>)

  const statProps = screen.getByText(/This is the info/i);
  const infoProps = screen.getByText(/This is the title/i);
  const titleProps = screen.getByText(/1234/i);

  expect(statProps).toBeInTheDocument();
  expect(infoProps).toBeInTheDocument();
  expect(titleProps).toBeInTheDocument();
});

// test('renders input and allow typing', () => {

//     renderMetricCard()

//     const searchLink = screen.getByTestId('nav-input');
//     const text = 'stuff'
//     userEvent.type(searchLink, text)

//   expect(searchLink).toBeInTheDocument();
//   expect(searchLink.value).toEqual(text)
// });
