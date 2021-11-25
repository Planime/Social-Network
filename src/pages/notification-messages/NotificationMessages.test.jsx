import React from 'react';
import NotificationMessages from './NotificationMessages';
import { render } from '@testing-library/react';

describe('NotificationMessages', () => {
it('renders without error', () => {
const { baseElement } = render(<NotificationMessages />);
expect(baseElement).toBeDefined();
});
});
