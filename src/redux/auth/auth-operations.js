import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token={
  set(token){
    axios.defaults.headers.common.Authorization=`Bearer  ${token}`;
  },
  unset(token){
    axios.defaults.headers.common.Authorization='';
  }
}

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch {
    toast.error('Try again');
  }
});

export const logIn= createAsyncThunk('auth/login', async credentials => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch {
      toast.error('Try again');
    }
  });

export const logOut=createAsyncThunk('auth/logout', async ()=>{
    try{
        await axios.post('/users/logout');
        token.unset();
    } catch{
        toast.error('Try again');  
    }
});
  

