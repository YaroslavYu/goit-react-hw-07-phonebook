import { nanoid, createSlice } from '@reduxjs/toolkit';

import { initialContacts } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts },
  reducers: {
    addContact: {
      reducer(contacts, action) {
        contacts.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(3),
            name,
            number,
          },
        };
      },
    },
    delContact: {
      reducer(contacts, action) {
        const index = contacts.items.findIndex(
          contact => contact.id === action.payload
        );
        contacts.items.splice(index, 1);
      },
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
