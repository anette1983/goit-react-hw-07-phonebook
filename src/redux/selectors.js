import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const filterQ = selectFilter(state); //'abc'
  const { items } = selectContacts(state);

  let filtered = items;
  if (filterQ !== '') {
    const normalizedFilter = filterQ.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return filtered;
};

export const selectFilteredAndSortedContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    let filtered = contacts.items;
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }
);
