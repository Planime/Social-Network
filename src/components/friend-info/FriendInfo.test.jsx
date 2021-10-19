import React from 'react';
import FriendInfo from './FriendInfo';
import { render } from '@testing-library/react';

describe('FriendIfo', () => {
it('renders without error', () => {
const { baseElement } = render(<FriendInfo />);
expect(baseElement).toBeDefined();
});
});
