import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { getReservation } from './reservationSlice';

export function Summary() {
  const reservation = useSelector(getReservation);

  return (
    <Container>
      <h1 className="h3 font-weight-bold">
        Twoja rezerwacja przebiegła pomyślnie!
      </h1>
      <br />
      <h2 className="h4">Wybrałeś miejsca:</h2>
      <ul className="text-monospace list-dash pl-0">
        {reservation.selected.map((seat) => (
          <li key={seat.id}>
            rząd x{seat.cords.x}, miejsce y{seat.cords.y} (id{seat.id})
          </li>
        ))}
      </ul>
      <p className="font-weight-bold">
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </p>
    </Container>
  );
}
