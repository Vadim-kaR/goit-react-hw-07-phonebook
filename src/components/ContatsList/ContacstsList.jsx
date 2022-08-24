// import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContactItem, ContactText, List } from './ContactsList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const ContactsList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = [];
  const filter = '';

  const getFiltredContact = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const deleteContact = id => {
    // dispatch(removeContact(id));
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
