import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
    // в пуст строку фильтра в стейте записали пейлоуд
    // setFilter: (state, { payload }) => {
    //   return (payload = payload);
    // },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
