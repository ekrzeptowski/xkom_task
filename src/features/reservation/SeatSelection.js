import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useFetch from 'react-fetch-hook';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { addSelected, getReservation } from './reservationSlice';
import { getRandom } from './getRandom';
import { Seat } from './Seat';

export function SeatSelection() {
  const history = useHistory();
  const dispatch = useDispatch();

  const reservation = useSelector(getReservation);
  const [touched, setTouched] = useState(false);

  const { isLoading, data } = useFetch(
    process.env.NODE_ENV === 'development'
      ? '/seats'
      : process.env.REACT_APP_SEATS_URL || '/seats'
  );
  const seatsArray = data?.seats || data;

  // Get maximum seat cords
  const maxX =
    seatsArray && Math.max(...seatsArray.map((seat) => seat.cords.x));
  const maxY =
    seatsArray && Math.max(...seatsArray.map((seat) => seat.cords.y));

  // Create empty space array
  const seats =
    seatsArray &&
    [...Array(maxX + 1)].map(() => [...Array(maxY + 1)].map(() => null));

  // Create seats on free space
  seatsArray &&
    seatsArray.forEach((seat) => {
      seats[seat.cords.x][seat.cords.y] = seat;
    });

  // Get random seats array
  const random = useMemo(
    () => getRandom(seats, reservation, reservation.seatsTogether),
    [seats, reservation]
  );

  // Add random seats to store
  useEffect(() => {
    reservation.selected.length === 0 &&
      !touched &&
      random?.length > 0 &&
      random.forEach((seat) => dispatch(addSelected(seat)));
  }, [dispatch, random, reservation.selected.length, touched]);

  const reserve = () => {
    reservation.selected.length === parseInt(reservation.seatsNumber, 10) &&
      history.push('/summary');
  };

  if (isLoading) {
    return (
      <Container
        className={`d-flex min-vh-100 justify-content-center align-items-center`}
      >
        <p>Proszę czekać. Trwa ładowanie danych.</p>
      </Container>
    );
  }

  return (
    <>
      <Row className="fit-content">
        {seats &&
          seats.map((row, y) => (
            <Row noGutters key={y} className="flex-nowrap">
              {row.map((seat, x) => (
                <Seat
                  key={`${x}, ${y}`}
                  seat={seat}
                  onClick={() => setTouched(true)}
                />
              ))}
            </Row>
          ))}
        <Row noGutters className="mt-2 align-items-center w-100">
          <Col sm="auto" className="d-flex flex-grow-1">
            <div className="d-flex align-items-center mr-2">
              <Seat seat={{}} />
              <span>Miejsca dostępne</span>
            </div>
            <div className="d-flex align-items-center mr-2">
              <Seat seat={{ reserved: true }} />
              <span>Miejsca zarezerwowane</span>
            </div>
            <div className="d-flex align-items-center mr-2">
              <Seat seat={{}} selected />
              <span>Twój wybór</span>
            </div>
          </Col>
          <Col>
            <Button
              as="input"
              type="button"
              value="Rezerwuj"
              variant="outline-primary"
              onClick={() => reserve()}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
}
