import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

import { getContacts } from './redux/selectors';
import { addContact } from './redux/contactsSlice';

import { StyledAppContainer, Title } from './phonebook.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkContactIsAdded = newContact => {
    const nameContact = newContact.name.trim().toUpperCase();
    const findContact = contacts.find(
      ({ name }) => name.trim().toUpperCase() === nameContact
    );
    if (findContact) {
      return true;
    } else return false;
  };

  const addCheckedContact = (newContact, actions) => {
    const isAddedBefore = checkContactIsAdded(newContact);
    if (isAddedBefore) {
      alert('contact be already added before');
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <StyledAppContainer>
      <Title>Phonebook</Title>
      <ContactForm addContact={addCheckedContact} />

      <Title>Contacts</Title>
      <Filter />

      <ContactList />
    </StyledAppContainer>
  );
};
