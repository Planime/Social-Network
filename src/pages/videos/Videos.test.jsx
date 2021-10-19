import React from 'react';
import Videos from './Videos';
import { render } from '@testing-library/react';

describe('Videos', () => {
it('renders without error', () => {
const { baseElement } = render(<Videos />);
expect(baseElement).toBeDefined();
});
});
