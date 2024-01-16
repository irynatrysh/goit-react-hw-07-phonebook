import { Form, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Form>
      <Label>Filter contacts by name: </Label>
      <Input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </Form>
  );
};
