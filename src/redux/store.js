import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import contactsReducer from './contacts/contactsReducer';

import { defaultMiddleware } from './defaultMiddleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: defaultMiddleware,
});

// export const persistor = persistStore(store);
