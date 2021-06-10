import { within } from '@testing-library/dom';
import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../test-utils';
import { Summary } from './Summary';

const initialState = {
  reservation: {
    selected: [
      {
        id: 's16',
        cords: {
          x: 1,
          y: 6,
        },
        reserved: false,
      },
      {
        id: 's17',
        cords: {
          x: 1,
          y: 7,
        },
        reserved: false,
      },
      {
        id: 's18',
        cords: {
          x: 1,
          y: 8,
        },
        reserved: false,
      },
      {
        id: 's19',
        cords: {
          x: 1,
          y: 9,
        },
        reserved: false,
      },
    ],
    seatsNumber: '4',
    seatsTogether: true,
  },
};

it('Renders summary page with selected seats', () => {
  render(<Summary />, {
    initialState,
  });

  expect(screen.getByText('rząd x1, miejsce y6 (ids16)')).toBeInTheDocument();
  expect(screen.getByText('rząd x1, miejsce y7 (ids17)')).toBeInTheDocument();
  expect(screen.getByText('rząd x1, miejsce y8 (ids18)')).toBeInTheDocument();
  expect(screen.getByText('rząd x1, miejsce y9 (ids19)')).toBeInTheDocument();
});

it('Renders correct number of selected seats', () => {
  render(<Summary />, {
    initialState,
  });

  const list = document.querySelector('ul');
  const seats = within(list).getAllByText('rząd', { exact: false });
  expect(seats).toHaveLength(4);
});
