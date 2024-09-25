import React from 'react';
import { render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Nav from '../src/Nav';

describe('Nav', () => {
  it('renders the Nav component', () => {
    render(<MemoryRouter><Nav /></MemoryRouter>)
  });
});