// import * as contactsActions from './contacts-actions';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async()=>{
    try{
    const { data } = await axios.get('/contacts');
    return data;
  }catch{
    toast.error('There are no contacts');
  }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async contact =>{
    try{
    const { data } = await axios.post('/contacts', contact);
    return data;
  }catch{
    toast.error("Cann't add contact");
  }
  }
);

export const deleteContacts=createAsyncThunk(
  "contacts/deleteContacts",
  async(contactId)=>{
    try{
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
    }catch{
      toast.error("Cann't delete contact");
    }
  }
)


// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(contactsActions.fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

// export const addContacts =
//   ({ id, name, number }) =>
//   async dispatch => {
//     const contact = {
//       id,
//       name,
//       number,
//     };
//     dispatch(contactsActions.addContactsRequest());
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       dispatch(contactsActions.addContactsSuccess(data));
//     } catch (error) {
//       dispatch(contactsActions.addContactsError(error));
//     }
//   };

// export const deleteContacts = contactId => async dispatch => {
//   dispatch(contactsActions.deleteContactsRequest());
//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(contactsActions.deleteContactsSuccess(contactId));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactsError(error));
//   }
// };
