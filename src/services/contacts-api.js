import axios from 'axios';

axios.defaults.baseURL = 'https://630350669eb72a839d7d9568.mockapi.io';

export const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const removeContact = async contactID => {
  return await axios.delete(`/contacts/${contactID}`);
};

export const addContact = async contact => {
  return await axios.post('/contacts', contact);
};
