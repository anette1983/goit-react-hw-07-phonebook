import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import StyledFilter from './Filter.styled';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter) || '';
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const target = event.target.value.trim();
    dispatch(setFilter(target));
  };

  return (
    <StyledFilter>
      Find contacts by name
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
      />
    </StyledFilter>
  );
};

export default Filter;
