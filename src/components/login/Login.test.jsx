import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';

describe('Login', () => {
it('renders without error', () => {
const { baseElement } = render(<Login />);
expect(baseElement).toBeDefined();
});
});
