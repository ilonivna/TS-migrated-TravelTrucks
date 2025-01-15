export const selectCampersList = (state) => state.campers.items;

export const selectCamper = (state) => state.campers.item;

export const selectTotalItems = (state) => state.campers.totalItems;

export const selectError = (state) => state.campers.error;

export const selectLoading = (state) => state.campers.loading;

export const selectFavorites = (state) => state.campers.favorites;

export const selectFilters = (state) => state.campers.filters;

export const selectPrice = (state) => state.campers.filters.price;

export const selectPage = (state) => state.campers.page;

const itemsPerPage = 4;
export const selectTotalPages = (state) => {
  return Math.ceil(state.campers.totalItems / itemsPerPage);
};
