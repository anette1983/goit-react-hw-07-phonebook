import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledList from './ContactsList.styled';
import {
  selectError,
  // selectFilteredContacts,
  selectIsLoading,
  selectFilteredAndSortedContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactsItem from 'components/ContactsItem/ContactsItem';

function ContactsList() {
  const filtered = useSelector(selectFilteredAndSortedContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <h3>Request in progress...</h3>}
      {error && <p>{error}</p>}
      <StyledList>
        {filtered.map(contact => {
          return <ContactsItem key={contact.id} contact={contact} />;
        })}
      </StyledList>
    </>
  );
}

export default memo(ContactsList);

// import { memo, useEffect } from 'react';
// // import ContactstItem from 'components/ContactsItem';
// import { useDispatch, useSelector } from 'react-redux';
// // import { toast } from 'react-toastify';
// // import { deleteContact } from 'redux/contactsSlice';
// import StyledList from './ContactsList.styled';
// import StyledItem from 'components/ContactsItem/ContactsItem.styled';
// import StyledButton from 'components/Button.styled';
// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   selectFilteredContacts,
//   selectIsLoading,
// } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// import ContactsItem from 'components/ContactsItem/ContactsItem';

// function ContactsList() {
//   //const { items } = useSelector(state=>selectContacts(state));
//   //const filter = useSelector(selectFilter);

//   const filtered = useSelector(selectFilteredContacts);
//   // console.log('items :>> ', items);
//   //  const { items, isLoading, error } = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();
//   // console.log('filter :>> ', filter);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   // let filtered = items;
//   // if (filter !== '') {
//   //   const normalizedFilter = filter.toLowerCase();
//   //   filtered = items.filter(contact =>
//   //     // const filtered
//   //     contact.name.toLowerCase().includes(normalizedFilter)
//   //   );
//   // }

//   //const filtered = selectFilteredContacts();

//   // const handleDelete = id => {
//   //   dispatch(deleteContact(id));
//   // };

//   // return (
//   //   <StyledList>
//   //     {filtered.map(contact => {
//   //       return <ContactstItem key={contact.id} contact={contact} />;
//   //     })}
//   //   </StyledList>
//   // );

//   // const showToast = () => {
//   //   toast.error('Hello World');
//   // };
//   return (
//     <>
//       {isLoading && !error && <p>Request in progress...</p>}
//       {error && <p>{error}</p>}
//       <StyledList>
//         {filtered.map(contact => {
//           return (
//             <ContactsItem key={contact.id} contact={contact}>
//               {/* <span>{name}:</span>
//               <span>{phone}</span>
//               <StyledButton type="button" onClick={() => handleDelete(id)} /> */}
//             </ContactsItem>
//           );
//         })}
//       </StyledList>
//     </>
//   );
// }

// export default memo(ContactsList);
