import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

import { handleFulfilledAdd, handleFulfilledDelete, handleFulfilledFetch, handlePending, handleRejected } from './services';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const thunksArr = [fetchContacts, addContact, deleteContact];
export const handleStatus = type => thunksArr.map(el => el[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...handleStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...handleStatus('rejected')), handleRejected);
  },
});

export default contactsSlice.reducer;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';
// import { toast } from 'react-toastify';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// // const handleDeletePending =
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const handleFulfilledFetch = (state, action) => {
//   handleFulfilled(state);
//   state.items = action.payload;
// };

// const handleFulfilledAdd = (state, action) => {
//   toast.success(`Contact added successfully`);
//   handleFulfilled(state);
//   state.items.push(action.payload);
// };

// const handleFulfilledDelete = (state, action) => {
//   handleFulfilled(state);
//   const index = state.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// };

// const thunksArr = [fetchContacts, addContact, deleteContact];

// const handleStatus = type => thunksArr.map(el => el[type]);

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     // addContact: {
//     //   reducer(state, action) {
//     //     state.push(action.payload);
//     //     // return [...state, action.payload];
//     //   },
//     //   prepare(newContact) {
//     //     return {
//     //       payload: {
//     //         id: nanoid(),
//     //         ...newContact,
//     //       },
//     //     };
//     //   },
//     // },
//     // deleteContact: (state, action) => {
//     //   const index = state.find(contact => contact.id === action.payload);
//     //   state.splice(index, 1);
//     //   /** */
//     // },
//     // deleteContact: (state, action) => {
//     //   return state.filter(contact => contact.id !== action.payload);
//     // },
//   },

//   // extraReducers: {
//   //   [fetchContacts.pending]: handlePending,
//   //   [addContact.pending]: handlePending,
//   //   [deleteContact.pending]: handlePending,
//   //   [fetchContacts.rejected]: handleRejected,
//   //   [addContact.rejected]: handleRejected,
//   //   [deleteContact.rejected]: handleRejected,
//   //   [fetchContacts.fulfilled](state, action) {
//   //     state.isLoading = false;
//   //     state.error = null;
//   //     state.items = action.payload;
//   //   },
//   //   [addContact.fulfilled](state, action) {
//   //     console.log('action.payload :>> ', action.payload);
//   //     return {
//   //       ...state,
//   //       isLoading: false,
//   //       error: null,
//   //       items: [...state.items, action.payload],
//   //     };
//   //     // state.isLoading = false;
//   //     // state.error = null;
//   //     // state.items.push(action.payload);
//   //   },
//   //   [deleteContact.fulfilled](state, action) {
//   //     state.isLoading = false;
//   //     state.error = null;
//   //     const index = state.items.findIndex(
//   //       contact => contact.id === action.payload.id
//   //     );
//   //     state.items.splice(index, 1);
//   //   },
//   // },
//   extraReducers: builder => {
//     builder
//       // .addCase(fetchContacts.pending, handlePending)
//       // .addCase(addContact.pending, handlePending)
//       // .addCase(deleteContact.pending, handlePending)
//       // .addCase(fetchContacts.rejected, handleRejected)
//       // .addCase(deleteContact.rejected, handleRejected)
//       .addCase(
//         fetchContacts.fulfilled,
//         handleFulfilledFetch
//         // (state, action) => {
//         // state.isLoading = false;
//         // state.error = null;
//       )
//       .addCase(
//         addContact.fulfilled,
//         handleFulfilledAdd
//         // console.log('action.payload :>> ', action.payload);
//         // toast.success(`Contact added successfully`);
//         // return {
//         //   ...state,
//         //   isLoading: false,
//         //   error: null,
//         //   items: [...state.items, action.payload],
//         // };
//         // state.isLoading = false;
//         // state.error = null;
//         // handleFulfilled(state);
//         // state.items.push(action.payload);)
//       )
//       .addCase(
//         deleteContact.fulfilled,
//         handleFulfilledDelete
//         // (state, action) => {
//         // state.isLoading = false;
//         // state.error = null;
//         // handleFulfilled(state);
//         // const index = state.items.findIndex(
//         //   contact => contact.id === action.payload.id
//         // );
//         // state.items.splice(index, 1);
//         // }
//       )
//       .addMatcher(
//         isAnyOf(
//           // fetchContacts.pending,
//           // addContact.pending,
//           // deleteContact.pending
//           ...handleStatus('pending')
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           // fetchContacts.rejected,
//           // addContact.rejected,
//           // deleteContact.rejected
//           ...handleStatus('rejected')
//         ),
//         handleRejected
//       );
//   },
// });

// // export const { addContact, deleteContact } = contactsSlice.actions;
// // export const contactsReducer = persistReducer(
// //   persistConfig,
// //   contactsSlice.reducer
// // );

// export default contactsSlice.reducer;
