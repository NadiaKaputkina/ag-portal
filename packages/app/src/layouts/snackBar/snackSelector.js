import { createSelector } from 'reselect';

export const selectSnack = (state) => state.snack;

export const selectOpen = createSelector(
    selectSnack,
    (snack) => snack.open,
)