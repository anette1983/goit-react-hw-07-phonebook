import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/Button.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';

function ContactsItem({ contact }) {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = id => {
    setDelId(id);
    dispatch(deleteContact(id));
    return toast.success(`Contact deleted successfully`);
  };

  return (
    <StyledItem>
      <span>{contact.name}:</span>
      <span>{contact.phone}</span>
      <StyledButton
        type="button"
        onClick={() => handleDelete(contact.id)}
        disabled={delId === contact.id}
      >
        {delId === contact.id ? 'Deleting...' : 'Delete'}
      </StyledButton>
    </StyledItem>
  );
}

export default ContactsItem;
