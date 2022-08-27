// import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContactItem, ContactText, List } from './ContactsList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { getFilterName } from 'redux/contacts/contactsSelectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(getFilterName);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const getFiltredContact = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const data = getFiltredContact();

  const deleteContact = id => {
    dispatch(contactsOperations.removeContact(id));
  };

  return (
    <Box pt="l" pb="l" width="100%">
      <List>
        {data?.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactText>
              {name}: {phone}
            </ContactText>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </ContactItem>
        ))}
      </List>
    </Box>
  );
};

// ContactsList.prototype = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     })
//   ),
// };

export { ContactsList };
