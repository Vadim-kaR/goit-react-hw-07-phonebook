// import * as contactsActions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await API.fetchAllContacts();
    return contacts;
  }
);
