import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getContacts } from 'redux/operations';

import { StyledAppContainer, Title } from './phonebook.styled';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <StyledAppContainer>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />

      <ContactList />
    </StyledAppContainer>
  );
};
