import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

describe('Header', () => {
it('renders without error', () => {
const { baseElement } = render(<Header />);
expect(baseElement).toBeDefined();
});
});
