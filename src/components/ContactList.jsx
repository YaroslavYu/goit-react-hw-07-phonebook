import { useSelector, useDispatch } from 'react-redux';
import { StyledListItem } from './phonebook.styled';
import { deleteContact } from 'redux/operations';
import {
  selectFilteredContacts,
  selectIsLoadind,
  selectError,
} from '../redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();

  const isLoadindg = useSelector(selectIsLoadind);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoadindg && <div>Loading phonebook...</div>}
      {isError && (
        <div style={{ color: 'red' }}>Something wrong. Pleas, try again</div>
      )}
      {!isLoadindg && !isError && (
        <ul>
          {filteredContacts.map(({ name, phone, id }) => {
            return (
              <StyledListItem key={id}>
                <span>
                  {name} - {phone}
                </span>

                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </StyledListItem>
            );
          })}
        </ul>
      )}
    </>
  );
}
