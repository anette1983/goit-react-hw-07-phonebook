import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //     // return [...state, action.payload];
    //   },
    //   prepare(newContact) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         ...newContact,
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, action) => {
    //   const index = state.find(contact => contact.id === action.payload);
    //   state.splice(index, 1);
    //   /** */
    // },
    // deleteContact: (state, action) => {
    //   return state.filter(contact => contact.id !== action.payload);
    // },
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      console.log('action.payload :>> ', action.payload);
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, action.payload],
      };
      // state.isLoading = false;
      // state.error = null;
      // state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export default contactsSlice.reducer;
