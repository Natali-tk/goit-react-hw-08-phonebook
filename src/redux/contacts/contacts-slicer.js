import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) =>
      (state.contacts = payload),
    [addContacts.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContacts.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


