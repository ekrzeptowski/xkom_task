import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from '../../test-utils';
import { Seat } from './Seat';

import styles from './Seat.module.scss';

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

it('Renders free space', () => {
  const { container } = render(<Seat />, {
    initialState,
  });

  expect(container).toBeInTheDocument();
});

it('Renders free seat', () => {
  const { container } = render(
    <Seat seat={{ id: 's52', cords: { x: 5, y: 2 }, reserved: false }} />,
    {
      initialState,
    }
  );

  const seat = container.querySelector('div').querySelector('div');

  expect(seat).toBeInTheDocument();
  expect(seat).toHaveClass(styles.seat);
});

it('Renders reserved seat', () => {
  const { container } = render(
    <Seat seat={{ id: 's52', cords: { x: 5, y: 2 }, reserved: true }} />,
    {
      initialState,
    }
  );

  const seat = container.querySelector('div').querySelector('div');

  expect(seat).toBeInTheDocument();
  expect(seat).toHaveClass(styles.reserved);
});

it('Renders selected seat', () => {
  const { container } = render(
    <Seat seat={{ id: 's19', cords: { x: 1, y: 9 }, reserved: false }} />,
    {
      initialState,
    }
  );

  const seat = container.querySelector('div').querySelector('div');

  expect(seat).toBeInTheDocument();
  expect(seat).toHaveClass(styles.selected);
});
