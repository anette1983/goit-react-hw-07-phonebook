import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/Button.styled';

function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const { name, number, id } = contact;

  return (
    <StyledItem>
      <span>{name}:</span>
      <span>{number}</span>
      <StyledButton type="button" onClick={() => handleDelete(id)}>
        Delete
      </StyledButton>
    </StyledItem>
  );
}

// Або перенести айтем назад у ліст

export default ContactsItem;
