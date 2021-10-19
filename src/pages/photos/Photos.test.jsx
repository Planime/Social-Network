import React from 'react';
import Photos from './Photos';
import { render } from '@testing-library/react';

describe('Photos', () => {
it('renders without error', () => {
const { baseElement } = render(<Photos />);
expect(baseElement).toBeDefined();
});
});
