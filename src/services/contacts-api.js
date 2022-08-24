import axios from 'axios';

axios.defaults.baseURL = 'https://630350669eb72a839d7d9568.mockapi.io';

export async function fetchAllContacts() {
  const data = await axios.get('/contacts');
  return data;
}

export async function addContact() {}

export async function deleteContact(contactID) {}
