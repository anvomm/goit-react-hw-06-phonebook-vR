import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-actions';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
        required
      />
    </FilterLabel>
  );
};
