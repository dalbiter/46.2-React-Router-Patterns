import { render, fireEvent } from '@testing-library/react'
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'vitest';

describe('App', () => {
    it('renders the App component', () => {
        render((
            <MemoryRouter>
                <App />
            </MemoryRouter>
        ));
    });

    it('/about route', () => {
        const { getByText } = render((
            <MemoryRouter initialEntries={['/about']}>
                <App />
            </MemoryRouter>
        ));
        expect(getByText('About')).toBeInTheDocument();
    });

    it('/home route', () => {
        const { getByText } = render((
            <MemoryRouter initialEntries={['/home']}>
                <App />
            </MemoryRouter>
        ));
        expect(getByText('Home')).toBeInTheDocument();
        const link = getByText('Contact');
        fireEvent.click(link);
        expect(getByText('Contact')).toBeInTheDocument();
    });    
    
    
    // screen.debug(); // prints out the jsx in the App component unto the command line
});