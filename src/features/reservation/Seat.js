import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSelected,
  getReservation,
  removeSelected,
} from './reservationSlice';

import styles from './Seat.module.scss';

const check = (reservation, seat) =>
  reservation.selected.some(
    (reserved) =>
      seat.cords?.x === reserved.cords?.x && seat.cords?.y === reserved.cords?.y
  );

export const Seat = ({ seat, selected, onClick }) => {
  const dispatch = useDispatch();
  const reservation = useSelector(getReservation);
  const [checked, setChecked] = useState(seat && check(reservation, seat));

  useEffect(() => {
    setChecked(seat && check(reservation, seat));
  }, [reservation, seat]);

  const onCheck = () => {
    onClick();
    if (!checked) {
      if (reservation.selected.length < reservation.seatsNumber) {
        setChecked(true);
        dispatch(addSelected(seat));
      } else {
          dispatch(removeSelected(reservation.selected[0]));
          dispatch(addSelected(seat))
      }
    } else {
      setChecked(false);
      dispatch(removeSelected(seat));
    }
  };

  return (
    <div className={styles.space}>
      {seat && (
        <div
          className={`${styles.seat} ${seat.reserved ? styles.reserved : ''} ${
            selected || checked ? styles.selected : ''
          } ${!seat.id ? styles.legend : ''}`}
          onClick={() => !seat.reserved && seat.id && onCheck()}
        ></div>
      )}
    </div>
  );
};
