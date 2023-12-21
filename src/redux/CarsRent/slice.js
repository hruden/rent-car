import { createSlice } from '@reduxjs/toolkit';
import { getFetchCars } from './operation';

const initialState = {
  cars: [],
  favorites: [],
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
    favoritesCars: (state, { payload }) => {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter(item => item !== payload);
      } else {
        state.favorites.push(payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFetchCars.pending, handlePending)
      .addCase(getFetchCars.rejected, handleRejected)
      .addCase(getFetchCars.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.isLoading = false;
      });
  },
});

export const { favoritesCars} = carsSlice.actions;  
export const carsReducer = carsSlice.reducer;
