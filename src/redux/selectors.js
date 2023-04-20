export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const filterQ = selectFilter(state);
  console.log('state :>> ', state);
  const { items } = selectContacts(state);
  //   let filtered = items;
  if (filterQ !== '') {
    const normalizedFilter = filterQ.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  //   return filtered;
};
