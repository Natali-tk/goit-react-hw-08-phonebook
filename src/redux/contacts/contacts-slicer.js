import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {fetchContacts, addContacts, deleteContacts} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) =>
      (state.contacts = payload),
    [addContacts.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContacts.fulfilled]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});
export const { changeFilter} = filterSlice.actions;

const contactReducer  = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default contactReducer;
