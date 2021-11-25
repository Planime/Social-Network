import React from 'react';
import Authentication from './Authentication';
import { render } from '@testing-library/react';

describe('Authentication', () => {
it('renders without error', () => {
const { baseElement } = render(<Authentication />);
expect(baseElement).toBeDefined();
});
});
