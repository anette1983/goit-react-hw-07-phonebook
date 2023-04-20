import { memo, useEffect } from 'react';
// import ContactstItem from 'components/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { deleteContact } from 'redux/contactsSlice';
import StyledList from './ContactsList.styled';
import StyledItem from 'components/ContactsItem/ContactsItem.styled';
import StyledButton from 'components/Button.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  // selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

function ContactsList() {
  const { items } = useSelector(selectContacts);
  console.log('items :>> ', items);
  //  const { items, isLoading, error } = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filtered = items;
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();
    filtered = items.filter(contact =>
      // const filtered
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  // const filtered = selectFilteredContacts(items, filter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  // return (
  //   <StyledList>
  //     {filtered.map(contact => {
  //       return <ContactstItem key={contact.id} contact={contact} />;
  //     })}
  //   </StyledList>
  // );

  // const showToast = () => {
  //   toast.error('Hello World');
  // };
  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {/* {error && showToast()} */}
      <StyledList>
        {filtered.map(({ name, phone, id }) => {
          return (
            <StyledItem key={id}>
              <span>{name}:</span>
              <span>{phone}</span>
              <StyledButton type="button" onClick={() => handleDelete(id)}>
                Delete
              </StyledButton>
            </StyledItem>
          );
        })}
      </StyledList>
    </>
  );
}

export default memo(ContactsList);
