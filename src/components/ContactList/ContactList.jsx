import { ListItem, Button, Span, NumberSpan } from './ContactList.styled';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Визначення змінних для повідомлень про завантаження та помилки
  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {contacts.length > 0 && (
        <ul>
          {(filter.length > 0
            ? contacts.filter(item =>
                item.name.toLowerCase().includes(filter.toLowerCase())
              )
            : contacts
          ).map(item => (
            <ListItem key={item.id}>
              <Span>{item.name}: </Span>
              <NumberSpan>{item.number}</NumberSpan>

              <Button onClick={() => dispatch(deleteContact(item.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
};
