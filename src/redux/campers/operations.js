import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAll from "../../fetch/getAll";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchAllCampers = createAsyncThunk(
  "campers/all",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const data = {
      page: state.campers.page,
      form: state.campers.filters.form,
      location: state.campers.filters.location,
      equipment: state.campers.filters.equipment,
      price: state.campers.filters.price,
    };

    try {
      const res = await getAll(data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/one",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
