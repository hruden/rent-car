import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.rentCars?.cars ?? [];
export const selectFavorites = state => state.rentCars?.favorites ?? [];
export const selectIsLoading = state => state.rentCars?.isLoading;
export const selectError = state => state.rentCars?.error;

export const getVisibleFavorite = createSelector(
    [selectCars, selectFavorites], 
    (cars, favorite) =>{
        return cars.filter((car) => favorite.includes(car.id))
    }
)