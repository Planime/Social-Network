import React from 'react';
import Friends from './Friends';
import { render } from '@testing-library/react';

describe('Friends', () => {
it('renders without error', () => {
const { baseElement } = render(<Friends />);
expect(baseElement).toBeDefined();
});
});
