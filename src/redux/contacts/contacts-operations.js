import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer  ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      token.set(data.token);
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
      token.set(data.token);
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
