import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch {
      toast.error('There are no contacts');
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch {
      toast.error("Cann't add contact");
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id=> {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch {
      toast.error("Cann't delete contact");
    }
  },
);