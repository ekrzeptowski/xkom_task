import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});
