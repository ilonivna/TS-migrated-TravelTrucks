import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamper, MyKnownError } from "./operations";
import { Camper } from "../../components/types/types"; // Import the shared Camper type

type Filters = {
  location: string;
  equipment: string[];
  form: string[];
  price: string;
};

type CampersState = {
  items: Camper[];
  item: Camper | null;
  favorites: string[] | undefined;
  loading: boolean;
  error: string | null;
  totalItems: number | null;
  page: number;
  filters: Filters;
};

const initialState: CampersState = {
  items: [],
  item: null,
  favorites: [],
  loading: false,
  error: null,
  totalItems: null,
  page: 1,
  filters: {
    location: "",
    equipment: [],
    form: [],
    price: "",
  },
};

const handlePending = (state: CampersState) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (
  state: CampersState,
  action: PayloadAction<MyKnownError | undefined>
) => {
  state.loading = false;
  state.error = action.payload?.error || "An error occurred";
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFavorite(
      state: CampersState,
      action: PayloadAction<string | undefined>
    ) {
      if (action.payload === undefined) {
        return;
      }
      if (state.favorites !== undefined) {
        state.favorites.push(action.payload);
      }
    },
    deleteFavorite(
      state: CampersState,
      action: PayloadAction<string | undefined>
    ) {
      if (state.favorites) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload
        );
      }
    },

    clearFilters(state: CampersState) {
      state.filters = { location: "", equipment: [], form: [], price: "" };
    },
    setFilters(state: CampersState, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
    setPage(state: CampersState, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotal(state: CampersState, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    setError(state: CampersState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setLoading(state: CampersState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setPrice(state: CampersState, action: PayloadAction<string>) {
      state.filters.price = action.payload;
    },
    clearItems(state: CampersState) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(
        fetchAllCampers.fulfilled,
        (state, action: PayloadAction<{ total: number; items: Camper[] }>) => {
          state.totalItems = action.payload.total;
          state.loading = false;
          state.error = null;
          const page = state.page;
          if (page !== 1) {
            state.items = [...state.items, ...action.payload.items];
          } else {
            state.items = action.payload.items;
          }
        }
      )
      .addCase(fetchAllCampers.rejected, handleRejected)
      .addCase(fetchCamper.pending, handlePending)
      .addCase(
        fetchCamper.fulfilled,
        (state, action: PayloadAction<Camper>) => {
          state.item = action.payload;
          state.loading = false;
        }
      )
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
