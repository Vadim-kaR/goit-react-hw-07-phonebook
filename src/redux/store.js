import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts/contactsSlice';
import { defaultMiddleware } from './defaultMiddleware';

export const store = configureStore({
  reducer: {
    contacts: contacts.reducer,
  },
  middleware: defaultMiddleware,
});
