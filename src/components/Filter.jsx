import { useDispatch } from 'react-redux';

import { StyledFilter } from './phonebook.styled';

import { addFilter } from '../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <label>
      Filter
      <StyledFilter
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
      />
    </label>
  );
}
