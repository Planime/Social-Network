import React from 'react';
import EditMyProfile from './EditMyProfile';
import { render } from '@testing-library/react';

describe('EditMyProfile', () => {
it('renders without error', () => {
const { baseElement } = render(<EditMyProfile />);
expect(baseElement).toBeDefined();
});
});
