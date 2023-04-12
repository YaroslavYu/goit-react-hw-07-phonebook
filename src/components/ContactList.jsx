import { useSelector, useDispatch } from 'react-redux';

import { StyledListItem } from './phonebook.styled';

import { getContacts, getFilter } from './redux/selectors';
import { delContact } from './redux/contactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toUpperCase().includes(filterQuery.toUpperCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <StyledListItem key={id}>
            <span>
              {name} - {number}
            </span>

            <button type="button" onClick={() => dispatch(delContact(id))}>
              Delete
            </button>
          </StyledListItem>
        );
      })}
    </ul>
  );
}
