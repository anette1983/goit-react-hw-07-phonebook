import { memo } from 'react';
// import ContactstItem from 'components/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import StyledList from './ContactsList.styled';
import StyledItem from 'components/ContactsItem/ContactsItem.styled';
import StyledButton from 'components/Button.styled';
import { getContacts, getFilter } from 'redux/selectors';

function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  let filtered = contacts;
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();
    filtered = contacts.filter(contact =>
      // const filtered
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

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

  return (
    <StyledList>
      {filtered.map(({ name, number, id }) => {
        return (
          <StyledItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <StyledButton type="button" onClick={() => handleDelete(id)}>
              Delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}

export default memo(ContactsList);
