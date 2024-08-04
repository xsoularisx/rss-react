import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardDetailedState, Starship } from '../../interfaces/intrefaces';

const initialState: CardDetailedState = {
  data: [],
};

const cardDetailedSlice = createSlice({
  name: 'detailedCards',
  initialState,
  reducers: {
    setDetailedCards: (state, action: PayloadAction<Starship>) => {
      if (!state.data.some(card => card.url === action.payload.url)) {
        state.data.push(action.payload);
      }
    },
    removeDetailedCards: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(card => card.url !== action.payload);
    },
    removeDetailedAllCards: state => {
      state.data = [];
    },
  },
});

export const { setDetailedCards, removeDetailedCards, removeDetailedAllCards } =
  cardDetailedSlice.actions;
export default cardDetailedSlice.reducer;
