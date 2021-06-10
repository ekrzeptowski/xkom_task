import React from 'react';
import { MemoryRouter } from 'react-router';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../test-utils';
import { Main } from './Main';

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
    seatsNumber: '1',
    seatsTogether: false,
  },
};

it('Saves correct settings to the store', () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>,
    {
      initialState,
    }
  );
  const input = screen.getByLabelText('Liczba miejsc:');
  const checkbox = screen.getByLabelText('Czy miejsca mają być obok siebie?');
  const button = screen.getByText('Wybierz miejsca');

  fireEvent.change(input, { target: { value: '2' } });
  fireEvent.click(checkbox);

  expect(input.value).toBe('2');
  expect(checkbox.checked).toEqual(true);

  fireEvent.click(button);
  // How to test action dispatch??
});
