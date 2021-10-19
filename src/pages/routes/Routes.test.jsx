import React from 'react';
import Routes from './Routes';
import { render } from '@testing-library/react';

describe('Routes', () => {
it('renders without error', () => {
const { baseElement } = render(<Routes />);
expect(baseElement).toBeDefined();
});
});
