import React from 'react';
import Test from './Test';
import { render } from '@testing-library/react';

describe('Test', () => {
it('renders without error', () => {
const { baseElement } = render(<Test />);
expect(baseElement).toBeDefined();
});
});
