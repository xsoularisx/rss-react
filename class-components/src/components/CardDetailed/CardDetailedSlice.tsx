import { createSlice } from '@reduxjs/toolkit';

const detailedCardSlice = createSlice({
  name: 'detailedCard',
  initialState: {
    data: null,
  },
  reducers: {
    setDetailedCard: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDetailedCard } = detailedCardSlice.actions;
export default detailedCardSlice.reducer;
