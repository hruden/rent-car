export const selectCars = state => state.rentCars?.cars ?? [];
export const selectFavorites = state => state.rentCars?.favorites ?? [];
export const selectPage = state => state.rentCars?.page;
export const selectIsLoading = state => state.rentCars?.isLoading;
export const selectError = state => state.rentCars?.error;
