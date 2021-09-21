import React from 'react';
import Drawer from './LeftNavBar';
import {render} from '@testing-library/react';

describe('Drawer', () => {
    it('renders without error', () => {
        const {baseElement} = render(<Drawer/>);
        expect(baseElement).toBeDefined();
    });
});
