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
    [fetchContacts.fulfilled]: (state, { payload }) => state.items = payload,
    [addContacts.fulfilled]: (state, { payload }) =>
      state.items = [payload,...state.items],
    [deleteContacts.fulfilled]: (state, { payload }) =>
      state.items.filter(contact => contact.id !== payload),
  },
});

export const { changeFilter } = contactsSlice.actions;

const contactReducer = contactsSlice.reducer;
export default contactReducer;
