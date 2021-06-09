import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: [],
  seatsNumber: 1,
  seatsTogether: false,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {

    saveSettings: (state, action) => {
      state.selected = [];
      state.seatsNumber = action.payload.seatsNumber;
      state.seatsTogether = action.payload.seatsTogether;
    },
    addSelected: (state, action) => {
      state.selected = [...state.selected, action.payload];
    },
    removeSelected: (state, action) => {
      state.selected = state.selected.filter(
        (val) => val.id !== action.payload.id
      );
    },

  },
});

export const { saveSettings, addSelected, removeSelected } =
  reservationSlice.actions;

export const getReservation = (state) => state.reservation;

export default reservationSlice.reducer;
