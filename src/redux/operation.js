import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({

  baseURL: 'https://6570796e09586eff66417617.mockapi.io/rent-car',
});

export const getFetchCars = createAsyncThunk(
  'rent-car/getFetchCars',
  
  async (credentials, thunkAPI) => {

    try {
      const res = await instance.get(`/catalog`, credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);