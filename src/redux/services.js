import { toast } from 'react-toastify';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledFetch = (state, action) => {
  handleFulfilled(state);
  state.items = action.payload;
};

export const handleFulfilledAdd = (state, action) => {
  toast.success(`Contact added successfully`);
  handleFulfilled(state);
  state.items.push(action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  handleFulfilled(state);
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};


