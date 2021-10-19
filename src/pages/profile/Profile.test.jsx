import React from 'react';
import Profile from './Profile';
import {render} from '@testing-library/react';

describe('Profile', () => {
    it('renders without error', () => {
        const {baseElement} = render(<Profile/>);
        expect(baseElement).toBeDefined();
    });
});
