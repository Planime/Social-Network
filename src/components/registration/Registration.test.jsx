import React from 'react';
import Registration from './Registration';
import { render } from '@testing-library/react';

describe('Registration', () => {
it('renders without error', () => {
const { baseElement } = render(<Registration />);
expect(baseElement).toBeDefined();
});
});
