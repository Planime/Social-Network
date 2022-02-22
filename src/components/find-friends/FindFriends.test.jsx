import React from 'react';
import FindFriends from './FindFriends';
import { render } from '@testing-library/react';

describe('FindFriends', () => {
it('renders without error', () => {
const { baseElement } = render(<FindFriends />);
expect(baseElement).toBeDefined();
});
});
