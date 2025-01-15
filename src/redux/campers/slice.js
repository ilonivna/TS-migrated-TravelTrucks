import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamper } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    item: null,
    favorites: [],
    loading: false,
    error: null,
    totalItems: null,
    page: 1,
    locations: [],
    filters: {
      location: "",
      equipment: [],
      form: [],
      price: "",
    },
  },
  reducers: {
    setFavorite: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteFavorite: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload
        );
      },
    },
    clearFilters: {
      reducer(state) {
        state.filters = [];
      },
    },
    setFilters: {
      reducer(state, action) {
        state.filters = action.payload;
      },
    },
    setPage: {
      reducer(state, action) {
        state.page = action.payload;
      },
    },
    setTotal: {
      reducer(state, action) {
        state.total = action.payload;
      },
    },
    setError: {
      reducer(state, action) {
        state.error = action.payload;
      },
    },
    setLoading: {
      reducer(state, action) {
        state.loading = action.payload;
      },
    },
    setPrice: {
      reducer(state, action) {
        state.filters.price = action.payload;
      },
    },
    clearItems: {
      reducer(state, action) {
        state.items = [];
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.totalItems = action.payload.total;

        state.loading = false;
        state.error = false;
        const page = state.page;
        if (page !== 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
      })
      .addCase(fetchAllCampers.rejected, handleRejected)
      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
export const {
  setFavorite,
  deleteFavorite,
  clearFilters,
  setFilters,
  setError,
  setLoading,
  setPage,
  setTotal,
  setPrice,
  clearItems,
} = campersSlice.actions;
