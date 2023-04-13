export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectIsLoadind = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return contacts.filter(({ name }) =>
    name.toUpperCase().includes(filter.toUpperCase())
  );
};
