import { cleanup, render } from '@testing-library/react';

import App from './App';
import React from 'react';

afterEach(cleanup);

describe('App', () => {
    it('renders properly', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot()
    })
})