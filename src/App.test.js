// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ValidatorBond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ValidatorBond/i);
    expect(titleElement).toBeInTheDocument();
});
