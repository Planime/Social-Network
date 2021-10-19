import React from 'react';
import Messages from './Messages';
import { render } from '@testing-library/react';

describe('Messages', () => {
it('renders without error', () => {
const { baseElement } = render(<Messages />);
expect(baseElement).toBeDefined();
});
});
