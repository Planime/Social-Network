import React from 'react';
import MainContent from './MainContent';
import { render } from '@testing-library/react';

describe('MainContent', () => {
it('renders without error', () => {
const { baseElement } = render(<MainContent />);
expect(baseElement).toBeDefined();
});
});
