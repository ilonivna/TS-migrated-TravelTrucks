import { RootState } from "../store";

export const selectCampersList = (state: RootState) => state.campers.items;

export const selectCamper = (state: RootState) => state.campers.item;

export const selectTotalItems = (state: RootState) => state.campers.totalItems;

export const selectError = (state: RootState) => state.campers.error;

export const selectLoading = (state: RootState) => state.campers.loading;

export const selectFavorites = (state: RootState) => state.campers.favorites;

export const selectFilters = (state: RootState) => state.campers.filters;

export const selectPrice = (state: RootState) => state.campers.filters.price;

export const selectPage = (state: RootState) => state.campers.page;

const itemsPerPage = 4;
export const selectTotalPages = (state: RootState) => {
  return Math.ceil(state.campers.totalItems / itemsPerPage);
};
