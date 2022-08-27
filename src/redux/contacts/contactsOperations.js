// import * as contactsActions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await API.fetchAllContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      await API.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      await API.addContact(contact);
      return await API.fetchAllContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
