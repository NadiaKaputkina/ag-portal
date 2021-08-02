import { createSelector } from 'reselect'

export const customerListSelector = (state) => state.customer.items;

export const customerSelector = (id) => createSelector(
    customerListSelector,
    (items) => items.find(item => {
        return item.id === +id
    })
)
