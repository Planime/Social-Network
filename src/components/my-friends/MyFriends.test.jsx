import React from 'react';
import MyFriends from './MyFriends';
import { render } from '@testing-library/react';

describe('MyFriends', () => {
it('renders without error', () => {
const { baseElement } = render(<MyFriends />);
expect(baseElement).toBeDefined();
});
});
