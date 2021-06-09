import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getReservation, saveSettings } from './reservationSlice';

import { useHistory } from 'react-router';

export function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  const reservation = useSelector(getReservation);

  const [seatsNumber, setSeatsNumber] = useState(reservation.seatsNumber);
  const [seatsTogether, setSeatsTogether] = useState(reservation.seatsTogether);

  const onSeatsNumberChanged = (event) => setSeatsNumber(event.target.value);
  const onSeatsTogetherChanged = (event) =>
    setSeatsTogether(event.target.checked);

  const onSubmit = (event) => {
    event.preventDefault();
    if (seatsNumber) {
      dispatch(saveSettings({ seatsNumber, seatsTogether }));
      history.push('/reservation');
    }
  };

  return (
    <Container
      className={`d-flex min-vh-100 justify-content-center align-items-center`}
    >
      <Form onSubmit={onSubmit}>
        <Form.Group as={Form.Row} controlId="seatsNumber">
          <Form.Label column>Liczba miejsc:</Form.Label>
          <Col>
            <Form.Control
              value={seatsNumber}
              onChange={onSeatsNumberChanged}
              required
              type="number"
              min="1"
            />
          </Col>
        </Form.Group>
        <Form.Check
          custom
          name="isNextSeat"
          className="mb-3"
          id="isNextSeat"
          value={seatsTogether}
          onChange={onSeatsTogetherChanged}
          label="Czy miejsca mają być obok siebie?"
        />
        <Button block type="submit" variant="outline-primary">
          Wybierz miejsca
        </Button>
      </Form>
    </Container>
  );
}
