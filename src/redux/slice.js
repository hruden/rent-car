import { createSlice } from '@reduxjs/toolkit';
import { getFetchCars } from './operation';

const initialState = {
  cars: [],
  favorites: [],
  page:1,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.friendsError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.friendsError = payload;
};

const carsSlice = createSlice({
  name: 'rentCars',
  initialState,
  reducers: {
    favoritesCars: (state, action) => {
      return {
        ...state,
        favorites: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFetchCars.pending, handlePending)
      .addCase(getFetchCars.rejected, handleRejected)
      .addCase(getFetchCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      });
  },
});

export const { favoritesCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
