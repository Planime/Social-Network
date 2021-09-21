import React from 'react';
import Main from './Main';
import { render } from '@testing-library/react';

describe('Main', () => {
it('renders without error', () => {
const { baseElement } = render(<Main />);
expect(baseElement).toBeDefined();
});
});
