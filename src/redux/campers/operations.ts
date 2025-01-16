import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAll from "../../fetch/getAll";
import { RootState } from "../store";
import { Camper } from "../../components/types/types";

export interface MyKnownError {
  error?: string;
  message?: string;
}

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchAllCampers = createAsyncThunk<
  {
    total: number;
    items: Camper[];
  },
  void,
  { rejectValue: MyKnownError }
>("campers/all", async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
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
  } catch (error) {
    const knownError: MyKnownError = {
      error: axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : "Unknown error occurred",
    };
    return thunkAPI.rejectWithValue(knownError);
  }
});

export const fetchCamper = createAsyncThunk<
  Camper,
  string,
  { rejectValue: MyKnownError }
>("campers/one", async (id, thunkAPI) => {
  try {
    const response = await axios.get<Camper>(`campers/${id}`);

    return response.data;
  } catch (error) {
    const knownError: MyKnownError = {
      error: axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : "Unknown error occurred",
    };
    return thunkAPI.rejectWithValue(knownError);
  }
});
