import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570796e09586eff66417617.mockapi.io/rent-car';

export const getFetchCars = createAsyncThunk(
  'rent-car/getFetchCars',

  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/cars?page=${page}&limit=12`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getFetchOneCar = async (carId) => {
  try {
    const res = await axios.get(`/cars/?id=${carId}`);
    return res.data;
  } catch (error) {
    return alert.error.message;
  }
};
