// import PropTypes from 'prop-types';
import { Form, Formik, ErrorMessage } from 'formik';
import { Box } from 'components/Box/Box';
import { InputTitle, InputField, AddBtn, Inpute } from './ContactForm.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactsSelectors } from 'redux/contacts';

import { TiPlus } from 'react-icons/ti';
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  let schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'name may contain only letters'
      ),
    phone: yup
      .string()
      .required()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number is not valid'
      ),
  });

  const handelContactSubmit = ({ name, phone }) => {
    const newContact = {
      name,
      phone,
    };

    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={schema}
        onSubmit={handelContactSubmit}
      >
        <Form autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p="l"
          >
            <InputField htmlFor="name">
              <InputTitle>Name</InputTitle>
              <Inpute type="text" name="name" />
              <ErrorMessage component="div" name="name" />
            </InputField>
            <InputField htmlFor="phone">
              <InputTitle>Phone</InputTitle>
              <Inpute type="tel" name="phone" />
              <ErrorMessage component="div" name="phone" />
            </InputField>
            <AddBtn type="submit">
              <TiPlus size={12} />
              Add Contact
            </AddBtn>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export { ContactForm };
