import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


export const renderComponent = (children) =>  render(
    <BrowserRouter>
    {children}
    </BrowserRouter>);
